import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl w-4/5 mx-auto my-8">
      <div className="card-body w-full">
        <h2 className="card-title text-indigo-600">{blog.title}</h2>
        <p>{blog.blogDesc}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Blog;
