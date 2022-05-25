import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import { request } from '../../utils/axios-utils';
import Loader from '../Shared/Loader';
import DeleteModal from './DeleteModal';
import MyOrdersRow from './MyOrdersRow';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery('myOrders', () =>
    request({ url: `/order/${user.email}` }).then((res) => res.data)
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Order Quantity</th>
            <th>Status</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <MyOrdersRow
              order={order}
              key={order._id}
              index={index + 1}
              setDeleteOrder={setDeleteOrder}
              refetch={refetch}
            ></MyOrdersRow>
          ))}
        </tbody>
        {deleteOrder && (
          <DeleteModal orderId={deleteOrder} refetch={refetch}></DeleteModal>
        )}
      </table>
    </div>
  );
};

export default MyOrders;
