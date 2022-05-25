import React from 'react';
import { useQuery } from 'react-query';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';
import Review from './Review';

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery('reviews', () =>
    request({ url: '/user/review' }).then((res) => res.data)
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="mx-12 mb-12">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl text-primary font-bold tracking-tight sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
            We are currently expanding and continuously fulfilling our objective
            through a wholesale enterprise by giving bigger opportunities to
            entrepreneurs to establish their own businesses by becoming our
            dealer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
          {reviews?.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
