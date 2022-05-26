import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery('orders', () =>
    request({ url: '/order' }).then((res) => res.data)
  );

  if (isLoading) {
    return <Loader />;
  }

  const handleMakeConfirmBtn = (id) => {
    request({ url: `/order/admin/${id}`, method: 'put' }).then((data) => {
      if (data.data.modifiedCount > 0) {
        refetch();
      }
    });

    toast.success('Order confirmed by admin');
  };

  return (
    <div className="overflow-x-auto">
      <div className="text-2xl mx-12 mb-4 font-semibold text-gray-600">
        Manage All orders
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>Product Name</th>
            <th>Ordered</th>
            <th>Status</th>
            <th>Payment Status</th>
            <th>isConfirmed</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{order.email}</td>
              <td>{order.product.title}</td>
              <td>{order.orderQuantity}</td>
              {order.status ? (
                <td className="text-success">{order.status}</td>
              ) : (
                <td className="text-error">pending</td>
              )}
              {order.payment ? (
                <td className="text-success">{order.payment}</td>
              ) : (
                <td className="text-error">Not Paid</td>
              )}
              <td>
                {order.status ? (
                  'true'
                ) : (
                  <button
                    onClick={() => handleMakeConfirmBtn(order._id)}
                    className="btn btn-success btn-xs"
                  >
                    Make Confirm
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
