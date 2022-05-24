import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { request } from '../../utils/axios-utils';

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = '92d3ded3c7e33a076fbe26cc98063565';

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            title: data.title,
            price: data.price,
            description: data.description,
            stock: data.stock,
            minOrderQty: data.minOrderQty,
            img: img,
          };
          // send to your database
          request({ url: '/product', method: 'post', data: { product } }).then(
            (res) => {
              toast.success('Product added successfully');
              reset();
            }
          );
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl">Add a Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Title</span>
          </label>
          <input
            type="text"
            placeholder="Type relevant title"
            className="input input-bordered w-full max-w-xs"
            {...register('title', {
              required: {
                value: true,
                message: 'Product title is required',
              },
            })}
          />
          <label className="label">
            {errors.title?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.title.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Unit price"
            className="input input-bordered w-full max-w-xs"
            {...register('price', {
              required: {
                value: true,
                message: 'Price is required',
              },
            })}
          />
          <label className="label">
            {errors.price?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Product description"
            {...register('description', {
              required: {
                value: true,
                message: 'Description is required',
              },
            })}
          ></textarea>
          <label className="label">
            {errors.description?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Add initial stock value"
            {...register('stock', {
              required: {
                value: true,
                message: 'Available quantity is required',
              },
            })}
            class="select input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.stock?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.stock.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Add initial stock value"
            {...register('minOrderQty', {
              required: {
                value: true,
                message: 'Minimum order quantity is required',
              },
            })}
            class="select input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.minOrderQty?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.minOrderQty.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register('image', {
              required: {
                value: true,
                message: 'Image is Required',
              },
            })}
          />
          <label className="label">
            {errors.image?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn btn-success w-full max-w-xs "
          type="submit"
          value={'ADD Product'}
        />
      </form>
    </div>
  );
};

export default AddProduct;
