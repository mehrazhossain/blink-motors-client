import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import avatar from '../../assets/images/default avatar.png';

const Navbar = () => {
  const [user] = useAuthState(auth);

  // Handle User Logout
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItems = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/portfolio'}>Portfolio</Link>
      </li>
      <li>
        <Link to={'/blog'}>Blog</Link>
      </li>
      <li>
        <Link to={'/contact'}>Contact</Link>
      </li>
      {user && (
        <li>
          <Link to={'/dashboard'}>Dashboard</Link>
        </li>
      )}
      {user ? (
        <div className="dropdown lg:dropdown-end dropdown-start">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ring ring-primary">
              <img src={user.photoURL || avatar} alt="login user profile" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40"
          >
            <li className="cursor-pointer mx-auto p-1 hover:text-primary hover:font-semibold">
              {user.displayName}
            </li>
            <li
              onClick={handleLogout}
              className="cursor-pointer mx-auto p-1 hover:text-primary hover:font-semibold"
            >
              Logout
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-40 bg-white drop-shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-accent"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to={'/'}
          className="btn btn-ghost normal-case text-xl text-semibold"
        >
          Blink Motors
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-accent">{menuItems}</ul>
      </div>
      <div>
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
