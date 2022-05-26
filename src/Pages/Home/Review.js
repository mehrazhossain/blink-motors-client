import React from 'react';
import quote from '../../assets/images/quote.png';

const Review = ({ review }) => {
  const reviewRatings = parseInt(review.ratings);

  return (
    <div>
      <img
        src={quote}
        alt=""
        className="object-cover w-20 h-20 mx-auto rounded-full"
      />

      <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
        <p className="text-lg font-bold text-gray-700">{review.name}</p>
        <p className="mt-1 text-xs font-medium text-gray-500">
          {review.profession}
        </p>
        <p className="mt-4 text-sm text-gray-500">{review.description}</p>
        <div className="rating mx-auto mt-3">
          {reviewRatings === 5 && (
            <>
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </>
          )}
          {reviewRatings === 4 && (
            <>
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
            </>
          )}
          {reviewRatings === 3 && (
            <>
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
            </>
          )}
          {reviewRatings === 2 && (
            <>
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
            </>
          )}
          {reviewRatings === 1 && (
            <>
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
            </>
          )}
          {reviewRatings === 0 && (
            <>
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
            </>
          )}
        </div>
      </blockquote>
    </div>
  );
};

export default Review;
