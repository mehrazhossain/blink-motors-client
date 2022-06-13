import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id, title, description, price, stock, img } = product;

  return (
    <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg drop-shadow-md dark:bg-gray-800">
      <img
        class="object-cover object-center w-full h-56"
        src={img}
        alt={`${title}`}
      />
      <div class="px-6 py-4">
        <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>

        <p class="py-1 text-gray-700 dark:text-gray-400">
          {description?.slice(0, 80)} ...
        </p>

        <div class="flex items-center mt-2 text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h1 class="mx-1 mr-16 text-lg font-semibold dark:text-gray-400 text-gray-800">
            {price}
          </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
          <h1 class="mx-1 text-lg font-semibold dark:text-gray-400 text-gray-800">
            {stock}
          </h1>
        </div>

        <Link
          to={`/purchase/${_id}`}
          class="flex items-center px-6 py-1 mt-3 bg-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-shopping-cart"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>

          <h1 class="mx-3 text-lg font-semibold text-white">BUY NOW</h1>
        </Link>
      </div>
    </div>
  );
};

export default Product;
