import React from 'react';
import { useQuery } from 'react-query';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';
import Blog from './Blog';

const Blogs = () => {
  // const { data: blogs, isLoading } = useQuery('blogs', () =>
  //   request({ url: '/user/blog' }).then((res) => res.data)
  // );

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-6xl text-primary">
            Coming Soon!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
