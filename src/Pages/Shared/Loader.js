import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center space-x-2 bg-white">
      <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
    </div>
  );
};

export default Loader;
