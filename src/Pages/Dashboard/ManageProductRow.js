import React from 'react';

const ManageProductRow = ({ product, index, setProductDeleteConfirmation }) => {
  return (
    <tr key={product._id}>
      <th>{index + 1}</th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={product.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{product.title}</div>
          </div>
        </div>
      </td>
      <td>{product.stock} Pieces</td>
      <th>
        <label
          onClick={setProductDeleteConfirmation}
          for="product-delete-modal"
          class="text-error cursor-pointer"
        >
          delete
        </label>
      </th>
    </tr>
  );
};

export default ManageProductRow;
