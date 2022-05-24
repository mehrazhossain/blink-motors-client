import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [input, setInput] = useState('');

  const { id } = useParams();

  const { data: product, isLoading } = useQuery('product', () =>
    request({ url: `/product/${id}` }).then((res) => res.data.product)
  );

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit = async (data) => {};

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const inputNumber = parseInt(inputValue);
    setInput(inputNumber);
  };

  return (
    <section className="mx-12">
      <Link to={'/'} class="btn btn-accent btn-xs ml-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.com/svgjs"
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
              class=""
            ></path>
          </g>
        </svg>
        Back
      </Link>
      <div class="relative mx-auto max-w-screen-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="py-12 bg-gray-50 md:py-24">
            <div class="max-w-lg px-4 mx-auto lg:px-8">
              <div class="flex items-center">
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
                  <span class="w-10 h-10 bg-blue-900 rounded-full"></span>
                )}

                <h2 class="ml-4 font-medium">{user.displayName}</h2>
              </div>

              <div class="mt-8">
                <h1 class="text-5xl font-medium text-primary tracking-tight my-4">
                  Product Information
                </h1>
                <p className="text-xl font-medium tracking-tight mb-2">
                  Unit Price: {product.price}$
                </p>
                <p>
                  <span className="text-success font-semibold">
                    Available Stock
                  </span>
                  : {product.stock} {product.stock > 0 ? 'Pieces' : 'Piece'}{' '}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  <span className="text-error">
                    Minimum order quantity for this product
                  </span>
                  : {product.minOrderQty}{' '}
                  {product.minOrderQty > 0 ? 'Pieces' : 'Piece'}
                </p>
              </div>

              <div class="mt-12">
                <div class="flow-root">
                  <ul class="-my-4 divide-y divide-gray-200">
                    <li class="flex items-center justify-between py-4">
                      <div class="flex items-start">
                        <img
                          class="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                          src={product.img}
                          alt=""
                        />

                        <div class="ml-4">
                          <p class="text-sm">{product.title}</p>

                          <dl class="mt-1 space-y-1 text-xs text-gray-500">
                            <div>
                              <dt class="inline">Order Quantity:</dt>
                              <dd class="inline">
                                <form class="grid grid-cols-6 gap-4">
                                  <div class="col-span-3">
                                    <input
                                      class="rounded-lg mt-2 shadow-sm border w-full text-sm p-2"
                                      placeholder="Add order quantity"
                                      onInput={handleInput}
                                      type="number"
                                    />
                                    <button
                                      class="w-full mt-2 btn btn-success btn-sm block mb-1 text-sm text-gray-800"
                                      for="order_quantity"
                                      disabled={
                                        input <= 0 || input > product.stock
                                      }
                                    >
                                      Add
                                    </button>
                                  </div>
                                </form>
                              </dd>
                            </div>

                            <div>
                              <dt class="inline">Size:</dt>
                              <dd class="inline">UK 10</dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div>
                        {input >= 1 && (
                          <p class="btn btn-xs">${input * product.price}</p>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="py-12 bg-white md:py-24">
            <div class="max-w-lg px-4 mx-auto lg:px-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                class="grid grid-cols-6 gap-4"
              >
                <div class="col-span-6">
                  <label class="block mb-1 text-sm text-gray-600" for="email">
                    Your Name
                  </label>

                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
                    type="email"
                    placeholder="Your name"
                    autoComplete="off"
                    id="text"
                  />
                </div>

                <div class="col-span-6">
                  <label class="block mb-1 text-sm text-gray-600" for="email">
                    Email
                  </label>

                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
                    type="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    id="email"
                  />
                </div>

                <div class="col-span-6">
                  <label class="block mb-1 text-sm text-gray-600" for="phone">
                    Phone
                  </label>

                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
                    type="tel"
                    placeholder="Provide a valid phone number"
                    id="phone"
                  />
                </div>

                <fieldset class="col-span-6">
                  <legend class="block mb-1 text-sm text-gray-600">
                    Card Details
                  </legend>

                  <div class="-space-y-px bg-white rounded-lg shadow-sm">
                    <div>
                      <label class="sr-only" for="card-number">
                        Card Number
                      </label>

                      <input
                        class="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                        type="text"
                        name="card-number"
                        id="card-number"
                        placeholder="Card number"
                      />
                    </div>

                    <div class="flex -space-x-px">
                      <div class="flex-1">
                        <label class="sr-only" for="card-expiration-date">
                          Expiration Date
                        </label>

                        <input
                          class="border-gray-200 relative rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                          type="text"
                          name="card-expiration-date"
                          id="card-expiration-date"
                          placeholder="MM / YY"
                        />
                      </div>

                      <div class="flex-1">
                        <label class="sr-only" for="card-cvc">
                          CVC
                        </label>

                        <input
                          class="border-gray-200 relative rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                          type="text"
                          name="card-cvc"
                          id="card-cvc"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset class="col-span-6">
                  <legend class="block mb-1 text-sm text-gray-600">
                    Billing Address
                  </legend>
                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
                    type="text"
                    placeholder="Your address"
                    id="address"
                  />
                </fieldset>

                <div class="col-span-6">
                  <button
                    class="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                    type="submit"
                  >
                    Order Now
                  </button>
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
