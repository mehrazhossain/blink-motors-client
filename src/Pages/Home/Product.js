import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Link
      to="/purchase"
      className="card lg:max-w-lg bg-base-100 shadow-xl
    hover:border-t-4 hover:border-primary
    "
    >
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <Link
            to="/purchase"
            className="btn btn-ghost w-full text-primary text-xl"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Product;
