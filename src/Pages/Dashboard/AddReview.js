import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }

  // handle React Hook Order Form
  const onSubmit = async (data) => {
    const review = {
      name: data.name,
      profession: data.profession,
      ratings: data.ratings,
      description: data.description,
    };
    request({ url: '/user/review', method: 'post', data: review }).then(
      (res) => {
        if (res.data.acknowledged === true) {
          toast.success(`Dear ${user.displayName}, thanks for reviewed.`);
          reset();
        }
      }
    );
  };

  return (
    <div>
      <h2 className="text-2xl">
        Hello {user.displayName}, Please write a review for{' '}
        <span className="font-semibold">Blink Motors</span>
      </h2>
      <form className="border m-8 " onSubmit={handleSubmit(onSubmit)}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="col-span-6">
              <label
                className="block mb-1 text-sm text-gray-600"
                htmlFor="email"
              >
                Your Name
              </label>

              <input
                className="rounded-lg shadow-sm border w-full text-sm p-2.5"
                type="text"
                placeholder="Your name"
                autoComplete="off"
                value={user.displayName}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="col-span-6">
              <label
                className="block mb-1 text-sm text-gray-600"
                htmlFor="email"
              >
                Your Profession
              </label>

              <input
                className="rounded-lg shadow-sm border w-full text-sm p-2.5"
                type="text"
                placeholder="Type here your profession"
                autoComplete="off"
                {...register('profession', {
                  required: {
                    value: true,
                    message: 'Profession is required',
                  },
                })}
              />
              <label className="label">
                {errors.profession?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.profession.message}
                  </span>
                )}
              </label>
            </div>
            <div className="col-span-6">
              <label
                className="block mb-1 text-sm text-gray-600"
                htmlFor="email"
              >
                Ratings
              </label>

              <input
                className="rounded-lg shadow-sm border w-full text-sm p-2.5"
                type="text"
                placeholder="Enter ratings"
                autoComplete="off"
                {...register('ratings', {
                  required: {
                    value: true,
                    message: 'Ratings is required',
                  },
                  pattern: {
                    value: /\b(?:0|1|2|3|4|5)\b/,
                    message: 'Please type a digit between 0 to 5',
                  },
                })}
              />
              <label className="label">
                {errors.ratings?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.ratings.message}
                  </span>
                )}
                {errors.ratings?.type === 'pattern' && (
                  <span className="label-text-alt text-red-500">
                    {errors.ratings.message}
                  </span>
                )}
              </label>
            </div>
            <div className="col-span-6">
              <label
                className="block mb-1 text-sm text-gray-600"
                htmlFor="email"
              >
                Review with Description
              </label>
              <textarea
                className="textarea w-full"
                type="text"
                placeholder="Write your review"
                autoComplete="off"
                {...register('description', {
                  required: {
                    value: true,
                    message: 'Review is required',
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <input
            className="btn btn-primary btn-sm mx-12 mb-12"
            type="submit"
            value={'Post'}
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
