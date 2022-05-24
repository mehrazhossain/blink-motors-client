import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import defaultAvatar from '../../assets/images/default avatar.jpg';
import { useForm } from 'react-hook-form';
import { request } from '../../utils/axios-utils';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const email = user.email;
  const { data: info, isLoading } = useQuery('userInfo', () =>
    request({ url: `/user/profile/${email}` }).then((res) => res.data.userInfo)
  );

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit = async (data) => {
    const userInfo = {
      location: data.location,
      education: data.education,
      phone: data.phone,
      linkedin: data.linkedin,
    };
    const email = user.email;
    request({
      url: `/user/profile/${email}`,
      method: 'put',
      data: { userInfo },
    }).then((res) => console.log(res));
    reset();
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div class="card lg:flex-1">
        <div class="card-body">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {user.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <img src={defaultAvatar} alt="" />
              )}
            </div>
          </div>
          <h2 class="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
          <div class="form-control w-full max-w-xs">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label class="label">
                <span class="label-text">What is your location?</span>
              </label>
              <input
                type="text"
                placeholder="city/district"
                class="input input-bordered w-full max-w-xs"
                name="location"
                autoComplete="off"
                {...register('location', {
                  required: {
                    value: true,
                    message: 'Location is require',
                  },
                })}
              />
              <label className="label">
                {errors.location?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.location.message}
                  </span>
                )}
              </label>
              <label class="label">
                <span class="label-text">Education</span>
              </label>
              <input
                type="text"
                placeholder="Enter your educational information"
                class="input input-bordered w-full max-w-xs"
                name="education"
                {...register('education', {
                  required: {
                    value: true,
                    message: 'Educational info is required',
                  },
                })}
              />
              <label className="label">
                {errors.education?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.education.message}
                  </span>
                )}
              </label>
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                type="number"
                placeholder="Type your phone number"
                class="input input-bordered w-full max-w-xs"
                name="phone"
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'Phone number is required',
                  },
                  pattern: {
                    value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                    message: 'Provide your 11 digit number',
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
                {errors.phone?.type === 'pattern' && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
              <label class="label">
                <span class="label-text">Linkedin Profile</span>
              </label>
              <input
                type="text"
                placeholder="Your linkedin profile url"
                class="input input-bordered w-full max-w-xs"
                name="linkedin"
                {...register('linkedin', {
                  required: {
                    value: true,
                    message: 'Linkedin profile url is required',
                  },
                })}
              />
              <label className="label">
                {errors.linkedin?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.linkedin.message}
                  </span>
                )}
              </label>
              <input
                className="btn btn-sm btn-primary mt-4 w-full"
                type="submit"
                value={'Add'}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="card mt-20 lg:flex-2 mr-12">
        <h1 className="text-2xl font-semibold my-5">Others Information</h1>
        <p className="mb-2">Location: {info?.location || 'N/A'}</p>
        <p className="mb-2">Education: {info?.education || 'N/A'}</p>
        <p className="mb-2">Phone: {info?.phone || 'N/A'}</p>
        <p className="mb-2">
          Linkedin Profile:{' '}
          <span className="font-semibold text-indigo-600">
            {info?.linkedin || 'N/A'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
