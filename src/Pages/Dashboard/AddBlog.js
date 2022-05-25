import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { request } from '../../utils/axios-utils';

const AddBlog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // handle React Hook Order Form
  const onSubmit = async (data) => {
    const blog = {
      title: data.title,
      img: data.img,
      blogDesc: data.blogDesc,
    };
    request({ url: '/admin/blog', method: 'post', data: blog }).then((res) => {
      if (res.data.acknowledged === true) {
        toast.success(`Blog added successfully`);
        reset();
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl mx-12">Create your own blog</h2>
      <form className="border m-8 " onSubmit={handleSubmit(onSubmit)}>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="col-span-6">
              <label class="block mb-1 text-sm text-gray-600" for="email">
                Blog Title
              </label>

              <input
                class="rounded-lg shadow-sm border w-full text-sm p-2.5"
                type="text"
                placeholder="Type your blog title"
                autoComplete="off"
                {...register('title', {
                  required: {
                    value: true,
                    message: 'Blog title is required',
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
            <div class="col-span-6">
              <label class="block mb-1 text-sm text-gray-600" for="email">
                Image URL
              </label>

              <input
                class="rounded-lg shadow-sm border w-full text-sm p-2.5"
                type="text"
                placeholder="Type here your profession"
                autoComplete="off"
                {...register('img', {
                  required: {
                    value: true,
                    message: 'Image URL is required',
                  },
                })}
              />
              <label className="label">
                {errors.img?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.img.message}
                  </span>
                )}
              </label>
            </div>

            <div class="col-span-6">
              <label class="block mb-1 text-sm text-gray-600" for="email">
                Blog Body
              </label>
              <textarea
                class="textarea w-full border"
                type="text"
                placeholder="Write your blog"
                autoComplete="off"
                {...register('blogDesc', {
                  required: {
                    value: true,
                    message: 'Review is required',
                  },
                })}
              />
              <label className="label">
                {errors.blogDesc?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.blogDesc.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <input
            className="btn btn-primary btn-sm mx-12 mb-12"
            type="submit"
            value={'Post Blog'}
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
