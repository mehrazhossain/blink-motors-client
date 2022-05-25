import React from 'react';
import { request } from '../../utils/axios-utils';

const DeleteModal = ({ refetch, orderId }) => {
  const handleDelete = () => {
    request({ url: `/order/${orderId}`, method: 'delete' }).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
      }
    });
  };

  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are sure! you want to delete this order?
          </h3>
          <div class="modal-action">
            <label
              onClick={handleDelete}
              for="delete-modal"
              class="btn bg-error hover:bg-error text-gray-800 mr-4 px-8"
            >
              Yes
            </label>
            <label
              for="delete-modal"
              class="btn bg-success hover:bg-success text-gray-800 mr-4 px-8"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
