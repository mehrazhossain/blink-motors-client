import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loader from '../Shared/Loader';
import useToken from '../../hooks/useToken';

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updateLoading, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [token] = useToken(user || googleUser);

  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // handle Created User
  if (token) {
    navigate('/purchase');
  }

  // Handle Loading
  if (loading || updateLoading || googleLoading) {
    return <Loader />;
  }

  // Error Handling
  let signInError;
  if (error || updateError || googleError) {
    signInError = (
      <p className="text-rose-700 font-semibold mb-1">
        <small>
          {error?.message || updateError?.message || googleError?.message}
        </small>
      </p>
    );
  }

  // Handle Google Sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  // React Hook Form Submit
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset();
    if (!signInError) {
      toast.success('User Created Successfully');
    }
  };

  return (
    <div className="flex justify-center mt-16">
      <div className="card w-96 bg-base-100 drop-shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-secondary text-5xl font-bold">
            Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                autoComplete="off"
                className="input input-bordered w-full max-w-xs"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is Required',
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

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                className="input input-bordered w-full max-w-xs"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is Required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Please provide a valid email',
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is Required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Password must be 6 characters or longer',
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {error && updateError && signInError}
            <input
              className="btn btn-secondary w-full max-w-xs text-xl text-base-100"
              type="submit"
              value={'Sign Up'}
            />
          </form>
          <p>
            <p>
              Already have an account?{' '}
              <Link className="text-secondary" to={'/login'}>
                <span className="font-semibold">Login</span>
              </Link>
            </p>
          </p>

          <div className="divider">OR</div>
          {googleError && signInError}
          <button onClick={handleGoogleSignIn} className="btn btn-ghost">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="#EA4335 "
                d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
              />
              <path
                fill="#34A853"
                d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
              />
              <path
                fill="#4A90E2"
                d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
              />
              <path
                fill="#FBBC05"
                d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
              />
            </svg>
            <span className="ml-2">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
