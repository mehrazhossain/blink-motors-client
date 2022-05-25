import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';

const BlogDetail = () => {
  return (
    <div className="w-2/3 mx-auto mt-12">
      <img
        className="object-cover w-full h-56"
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />

      <div className="p-4 bg-gray-900">
        <h5 className="text-sm text-white">
          How to position your furniture for positivity
        </h5>

        <p className="mt-1 text-sm text-gray-300 mt-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis
          aliquid accusamus? Sint, sequi voluptas.
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
