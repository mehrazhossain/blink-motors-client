import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';
import { toast } from 'react-toastify';

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const [input, setInput] = useState('');
  const [orderQuantity, setOrderQuantity] = useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: product, isLoading } = useQuery('product', () =>
    request({ url: `/product/${id}` }).then((res) => res.data.product)
  );

  // handle Loading
  if (isLoading) {
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
    setOrderQuantity(input);
  };

  // handle React Hook Order Form
  const onSubmit = async (data) => {
    const order = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      orderedQuantity: data.orderedQuantity,
      payableAmount: data.payableAmount,
      address: data.address,
      status: 'pending',
    };

    // send to database
    if (orderQuantity !== 0) {
      request({ url: '/order', method: 'post', data: { order } }).then(
        (res) => {
          toast.success('Order Successfully submitted');
          reset();
        }
      );
    }
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
                <h1 class="text-2xl font-medium tracking-tight my-4">
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
                              <dt class="inline">Order Quantity: {input}</dt>
                              <dd class="inline">
                                {/* Order Form  */}
                                <form
                                  onSubmit={handleOrderForm}
                                  class="grid grid-cols-6 gap-4"
                                >
                                  <div class="col-span-3">
                                    <input
                                      class="rounded-lg mt-2 shadow-sm border w-full text-sm p-2"
                                      placeholder="Add order quantity"
                                      onInput={handleInput}
                                      name="orderQuantity"
                                      type="number"
                                    />
                                    <button
                                      class="w-full mt-2 btn bg-black btn-sm block mb-1 text-sm text-white hover:bg-black"
                                      for="order_quantity"
                                      disabled={
                                        input < product.minOrderQty ||
                                        input > product.stock
                                      }
                                    >
                                      Add
                                    </button>
                                  </div>
                                </form>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div>
                        <p class="btn btn-sm hover:bg-white">
                          ${input * product.price}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="py-12 bg-white md:py-24">
            <div class="max-w-lg px-4 mx-auto lg:px-8">
              {/* React Hook Place Order Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                class="grid grid-cols-6 gap-4"
              >
                <div class="col-span-3">
                  <label
                    class="block mb-1 text-sm text-gray-600"
                    for="first_name"
                  >
                    Ordered Quantity
                  </label>

                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
                    type="text"
                    value={orderQuantity}
                    readOnly
                    {...register('orderedQty', {
                      required: {
                        value: true,
                        message: 'Ordered Quantity is required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.orderedQty?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.orderedQty.message}
                      </span>
                    )}
                  </label>
                </div>

                <div class="col-span-3">
                  <label
                    class="block mb-1 text-sm text-gray-600"
                    for="last_name"
                  >
                    Payable Amount $
                  </label>

                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
                    type="text"
                    value={orderQuantity * product.price}
                    readOnly
                    {...register('payableAmount', {
                      required: {
                        value: true,
                        message: 'Payable Amount is required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.payableAmount?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.payableAmount.message}
                      </span>
                    )}
                  </label>
                </div>

                <div class="col-span-6">
                  <label class="block mb-1 text-sm text-gray-600" for="email">
                    Your Name
                  </label>

                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
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

                <div class="col-span-6">
                  <label class="block mb-1 text-sm text-gray-600" for="email">
                    Email
                  </label>

                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
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

                <div class="col-span-6">
                  <label class="block mb-1 text-sm text-gray-600" for="phone">
                    Phone
                  </label>

                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
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
                <fieldset class="col-span-6">
                  <legend class="block mb-1 text-sm text-gray-600">
                    Billing Address
                  </legend>
                  <input
                    class="rounded-lg shadow-sm border w-full text-sm p-2.5"
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
