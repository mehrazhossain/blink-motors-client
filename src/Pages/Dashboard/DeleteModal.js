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
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are sure! you want to delete this order?
          </h3>
          <div className="modal-action">
            <label
              onClick={handleDelete}
              htmlFor="delete-modal"
              className="btn bg-error hover:bg-error text-gray-800 mr-4 px-8"
            >
              Yes
            </label>
            <label
              htmlFor="delete-modal"
              className="btn bg-success hover:bg-success text-gray-800 mr-4 px-8"
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
