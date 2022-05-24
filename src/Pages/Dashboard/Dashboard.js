import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div class="drawer bg-dark drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {admin ? (
          <h1 className="text-2xl text-indigo-700 text-center font-extrabold">
            Admin Dashboard
          </h1>
        ) : (
          <h1 className="text-2xl text-indigo-700 text-center font-extrabold">
            Dashboard of {user.displayName.split(' ')[0]}
          </h1>
        )}
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to={'/dashboard'}>My Profile</Link>
          </li>
          {!admin && (
            <li>
              <Link to={'/dashboard/my-orders'}>My Orders</Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to={'/dashboard/add-review'}>Add a Review</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to={'/dashboard/manage-users'}>Manage Users</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to={'/dashboard/add-product'}>Add Product</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
