import React from 'react';

const MyOrdersRow = ({ order, index, setDeleteOrder }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>{order.product.title}</td>
      <td>{order.orderQuantity}</td>
      {order.status ? (
        <td className="text-success font-semibold">Confirmed</td>
      ) : (
        <td className="text-error">Pending</td>
      )}
      {order.paymentStatus ? (
        <td className="text-success font-semibold">confirmed</td>
      ) : (
        <td className="text-error">
          <span className="btn btn-sm">Make Payment</span>
        </td>
      )}
      <td>
        <label
          for="delete-modal"
          onClick={() => setDeleteOrder(order._id)}
          class="btn hover:bg-error bg-error btn-sm text-gray-800 text-sm"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default MyOrdersRow;
