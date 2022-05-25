import React from 'react';
import { useQuery } from 'react-query';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';

const ManageOrders = () => {
  const { data: orders, isLoading } = useQuery('orders', () =>
    request({ url: '/order' }).then((res) => res.data)
  );
  if (isLoading) {
    return <Loader />;
  }

  const handleMakeConfirmBtn = () => {
    console.log('button clicked');
  };

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>Product Name</th>
            <th>Available Stock</th>
            <th>Ordered</th>
            <th>Status</th>
            <th>Payment</th>
            <th>isConfirmed</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{order.order.email}</td>
              <td>{order.order.product.title}</td>
              <td>{order.order.product.stock}</td>
              <td>{order.order.orderQuantity}</td>
              <td>{order.order.status}</td>
              <td>{order.order.paymentStatus}</td>
              <td>
                <button
                  onClick={handleMakeConfirmBtn}
                  class="btn btn-success btn-xs"
                >
                  Make Confirm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
