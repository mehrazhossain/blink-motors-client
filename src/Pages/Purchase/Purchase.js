import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';
import { toast } from 'react-toastify';

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: product, isLoading } = useQuery('product', () =>
    request({ url: `/product/${id}` }).then((res) => res.data)
  );

  // handle Loading
  if (isLoading || loading) {
    return <Loader />;
  }

  //  handle input
  const handleInput = (e) => {
    const inputValue = e.target.value;
    const inputNumber = parseInt(inputValue);
    setInput(inputNumber);
  };

  // handle Order Form
  const handleOrderForm = (e) => {
    e.preventDefault();
  };

  // handle React Hook Order Form
  const onSubmit = async (data) => {
    const amount = input * product.price;
    const order = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      orderQuantity: input,
      payableAmount: amount,
      address: data.address,
      product: product,
      productId: id,
    };

    // send to database
    if (input !== 0) {
      request({ url: '/order', method: 'post', data: order }).then((res) => {
        toast.success('Order Successfully submitted');
        reset();
      });
    }
    navigate('/');
  };

  return (
    <section className="mx-12">
      <Link to={'/'} className="btn btn-accent btn-xs ml-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnssvgjs="http://svgjs.com/svgjs"
          width="16px"
          height="16px"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          style={{ enableBackground: 'new 0 0 512 512' }}
          xmlSpace="preserve"
          className="mr-2"
        >
          <g>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="m22 11h-17.586l5.293-5.293a1 1 0 1 0 -1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414l-5.293-5.293h17.586a1 1 0 0 0 0-2z"
              fill="#ffffff"
              data-original="#000000"
              className=""
            ></path>
          </g>
        </svg>
        Back
      </Link>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-12 bg-gray-50 md:py-24">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <div className="flex items-center">
                {user.photoURL ? (
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="login user profile" />
                    </div>
                  </label>
                ) : (
                  <span className="w-10 h-10 bg-blue-900 rounded-full"></span>
                )}

                <h2 className="ml-4 font-medium">{user.displayName}</h2>
              </div>

              <div className="mt-8">
                <h1 className="text-2xl font-medium tracking-tight my-4">
                  Product Information
                </h1>
                <p className="font-medium tracking-tight mb-2">
                  Unit Price: {product.price}$
                </p>
                <p>
                  <span className="text-green-700">Available Stock</span>:{' '}
                  {product.stock} {product.stock > 0 ? 'Pieces' : 'Piece'}{' '}
                </p>
                <small>
                  <span className="text-rose-700">Minimum order limit</span>:{' '}
                  {product.minOrderQty}{' '}
                  {product.minOrderQty > 0 ? 'Pieces' : 'Piece'}
                </small>
              </div>

              <div className="mt-12">
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-200">
                    <li className="flex items-center justify-between py-4">
                      <div className="flex items-start">
                        <img
                          className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                          src={product.img}
                          alt=""
                        />

                        <div className="ml-4">
                          <p className="text-sm">{product.title}</p>

                          <dl className="mt-1 space-y-1 text-xs text-gray-500">
                            <div>
                              <dt className="inline">
                                Order Quantity: {input}
                              </dt>
                              <dd className="inline">
                                {/* Order Form  */}
                                <form
                                  onSubmit={handleOrderForm}
                                  className="grid grid-cols-6 gap-4"
                                >
                                  <div className="col-span-3">
                                    <input
                                      className="rounded-lg mt-2 shadow-sm border w-full text-sm p-2"
                                      placeholder="Add order quantity"
                                      onInput={handleInput}
                                      name="orderQuantity"
                                      type="number"
                                    />
                                  </div>
                                </form>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div>
                        <p className="btn btn-sm hover:bg-white">
                          ${input * product.price}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 bg-white md:py-24">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              {/* React Hook Place Order Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-6 gap-4"
              >
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
                    Email
                  </label>

                  <input
                    className="rounded-lg shadow-sm border w-full text-sm p-2.5"
                    type="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    value={user.email}
                    readOnly
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="col-span-6">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    htmlFor="phone"
                  >
                    Phone
                  </label>

                  <input
                    className="rounded-lg shadow-sm border w-full text-sm p-2.5"
                    type="tel"
                    placeholder="Provide a valid phone number"
                    id="phone"
                    {...register('phone', {
                      required: {
                        value: true,
                        message: 'Phone number is required',
                      },
                      pattern: {
                        value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                        message: 'Please provide a valid phone number',
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
                </div>
                <fieldset className="col-span-6">
                  <legend className="block mb-1 text-sm text-gray-600">
                    Billing Address
                  </legend>
                  <input
                    className="rounded-lg shadow-sm border w-full text-sm p-2.5"
                    type="text"
                    placeholder="Your address"
                    {...register('address', {
                      required: {
                        value: true,
                        message: 'Product title is required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.address?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </fieldset>

                <div className="col-span-6">
                  {input < product.minOrderQty || input > product.stock || (
                    <button
                      className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                      type="submit"
                    >
                      Order Now
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
