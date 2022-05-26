import React from 'react';

const ProductDeleteModal = () => {
  return (
    <div>
      <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure?</h3>
          <p class="py-4">you want to delete this product</p>
          <div class="modal-action">
            <label
              for="product-delete-modal"
              class="mx-6 cursor-pointer text-error"
            >
              <span className="mx-4">YES</span>
            </label>
            <label
              for="product-delete-modal"
              class="cursor-pointer text-green-700"
            >
              <span className="mr-4"> NO</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteModal;
