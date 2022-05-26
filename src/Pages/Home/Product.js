import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id, title, description, price, stock, minOrderQty, img } = product;

  return (
    <div
      className="card lg:max-w-lg bg-base-100 border shadow-xl
    hover:border-t-4 hover:border-primary
    "
    >
      <figure>
        <img style={{ height: '220px' }} src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-success font-semibold">Price: {price}$</p>
        <p>{description?.slice(0, 48)}...</p>
        <p>
          <span className="text-success font-semibold">Available stock:</span>{' '}
          {stock} Pieces
        </p>
        <small className="text-error">Min Order: {minOrderQty} Pieces</small>

        <div className="card-actions justify-center">
          <Link
            to={`/purchase/${_id}`}
            className="mx-auto text-primary text-xl"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
