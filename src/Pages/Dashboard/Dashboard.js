import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer bg-dark drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {admin ? (
          <h1 className="text-2xl text-indigo-700 text-center font-extrabold my-5">
            Admin Dashboard
          </h1>
        ) : (
          <h1 className="text-2xl text-indigo-700 text-center font-extrabold my-5">
            Dashboard of {user.displayName.split(' ')[0]}
          </h1>
        )}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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
              <Link to={'/dashboard/add-blog'}>Add Blog</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to={'/dashboard/add-product'}>Add Product</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to={'/dashboard/manage-orders'}>Manage All Orders</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to={'/dashboard/manage-products'}>Manage Products</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to={'/dashboard/manage-users'}>Manage Users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
