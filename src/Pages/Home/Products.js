import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loader from '../Shared/Loader';
import Product from './Product';

const Products = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery('products', () =>
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.data)
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-12 mb-16">
      <div className="mb-8  text-center">
        <h1 className="text-3xl font-semibold m-4">PRODUCT RECOMMENDATION</h1>
        <div className="mx-auto w-24 bg-primary p-0.5 bg-gradient-to-r from-purple-600 to-primary"></div>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12">
        {products.slice(0, 6).map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
