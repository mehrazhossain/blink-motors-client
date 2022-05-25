import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import avatar from '../../assets/images/default avatar.jpg';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';

const Review = ({ review }) => {
  const [user, loading] = useAuthState(auth);
  const reviewRatings = parseInt(review.ratings);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <img
        src={user?.photoURL ? user?.photoURL : avatar}
        alt=""
        className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
      />

      <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
        <p className="text-lg font-bold text-gray-700">{review.name}</p>
        <p className="mt-1 text-xs font-medium text-gray-500">
          {review.profession}
        </p>
        <p className="mt-4 text-sm text-gray-500">{review.description}</p>
        <div class="rating mx-auto mt-3">
          {reviewRatings === 5 && (
            <>
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
            </>
          )}
          {reviewRatings === 4 && (
            <>
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
            </>
          )}
          {reviewRatings === 3 && (
            <>
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
            </>
          )}
          {reviewRatings === 2 && (
            <>
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
            </>
          )}
          {reviewRatings === 1 && (
            <>
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
            </>
          )}
          {reviewRatings === 0 && (
            <>
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
              <input
                type="radio"
                name="rating-4"
                class="mask mask-star-2 bg-green-200"
              />
            </>
          )}
        </div>
      </blockquote>
    </div>
  );
};

export default Review;
