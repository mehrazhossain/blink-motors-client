import React from 'react';
import { useQuery } from 'react-query';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';
import Blog from './Blog';

const Blogs = () => {
  const { data: blogs, isLoading } = useQuery('blogs', () =>
    request({ url: '/user/blog' }).then((res) => res.data)
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mx-12 mt-12">
      <div className="text text-indigo-700 text-3xl font-bold">
        <span className="block text-center">Read our latest blog</span>
      </div>
      <div className="grid grid-cols md:grid-cols lg:grid-cols gap-5">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
