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
    <div className="mx-12 mb-16">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold m-4">PRODUCT RECOMMENDATION</h1>
        <div className="mx-auto w-24 bg-primary p-0.5 bg-gradient-to-r from-purple-600 to-primary"></div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
