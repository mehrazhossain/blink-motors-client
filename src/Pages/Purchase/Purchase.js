import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';

const Purchase = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useQuery('product', () =>
    request({ url: `/product/${id}` }).then((res) => res.data.product)
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>This is purchase page: {product.title}</h2>
    </div>
  );
};

export default Purchase;
