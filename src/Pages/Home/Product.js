import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div
      className="card lg:max-w-lg bg-base-100 shadow-xl
    hover:border-t-4 hover:border-primary
    "
    >
      <figure>
        <Link to={'/purchase'}>
          <img src={product.url} alt="Shoes" />
        </Link>
      </figure>
      <div className="card-body">
        <Link to={'/purchase'}>
          <h2 className="card-title">{product.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </Link>
        <div className="card-actions justify-center">
          <Link
            to="/purchase"
            className="btn btn-ghost w-full text-primary text-xl"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
