import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import Product from './Product';
import { request } from '../../utils/axios-utils';

const Products = () => {
  const { data: products, isLoading } = useQuery('products', () =>
    request({ url: '/product', method: 'get' }).then((res) => res.data)
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold m-4">PRODUCT RECOMMENDATION</h1>
        <div className="mx-auto w-24 bg-primary p-0.5 bg-gradient-to-r from-purple-600 to-primary"></div>
      </div>
      <div class="container px-6 py-8 mx-auto">
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
