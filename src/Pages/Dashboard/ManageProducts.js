import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';
import ManageProductRow from './ManageProductRow';
import ProductDeleteModal from './ProductDeleteModal';

const ManageProducts = () => {
  const [productDeleteConfirmation, setProductDeleteConfirmation] =
    useState(null);
  const { data: products, isLoading } = useQuery('products', () =>
    request({ url: '/product' }).then((res) => res.data)
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div class="overflow-x-auto w-full">
      <div className="text-2xl mx-12 mb-4 font-semibold text-gray-600">
        Manage all Products
      </div>
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Available Stock</th>
            <th>Remove</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ManageProductRow
              setProductDeleteConfirmation={setProductDeleteConfirmation}
              product={product}
              index={index}
            />
          ))}
        </tbody>
        {productDeleteConfirmation && <ProductDeleteModal></ProductDeleteModal>}
      </table>
    </div>
  );
};

export default ManageProducts;
