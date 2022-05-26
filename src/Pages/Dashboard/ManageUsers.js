import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import { request } from '../../utils/axios-utils';
import { toast } from 'react-toastify';

const ManageUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    request({ url: '/user' }).then((res) => res.data)
  );

  if (isLoading) {
    return <Loader />;
  }

  const makeAdmin = (email) => {
    request({ url: `/user/admin/${email}`, method: 'put' }).then((data) => {
      if (data.status === 200) {
        refetch();
        toast.success(`Now ${email} can play admin role.`);
      }
      if (data.response.status === 403) {
        toast.error("You can't make an Admin");
      }
    });
  };

  return (
    <div>
      <div className="text-2xl mx-12 mb-4 font-semibold text-gray-600">
        Manage all Users
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? (
                    <button className="btn btn-xs btn-success">Admin</button>
                  ) : (
                    <button
                      onClick={() => makeAdmin(user.email)}
                      className="btn btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-error">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
