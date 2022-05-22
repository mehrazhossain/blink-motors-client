import React from 'react';

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-rose-600 tracking-widest">
        404
      </h1>
      <div>
        <p className="text-accent text-xl">Page Not Found</p>
      </div>
    </main>
  );
};

export default NotFound;
