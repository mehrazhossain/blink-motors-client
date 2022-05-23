import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);

  // Handle User Logout
  const handleLogout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/purchase'}>Purchase</Link>
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
      <li>
        <Link to={'/login'}>
          {user ? <span onClick={handleLogout}>Logout</span> : 'Login'}
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral"
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
    </div>
  );
};

export default Navbar;
