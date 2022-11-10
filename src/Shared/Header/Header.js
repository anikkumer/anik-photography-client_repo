import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { profile, logOut } = useContext(AuthContext);
  console.log("context", profile);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar h-20  bg-neutral bg-base-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <img
          src="https://editzstock.com/wp-content/uploads/2022/05/Dslr-camera-Photography-Logo-PNG-Free-Download-1.png"
          alt=""
          width-100px
          height-100px
        />
        <Link to="/" className="btn btn-ghost normal-case text-xl text-cyan-50">
          Anik's Photography
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-cyan-50">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end d-flex">
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content items-center bg-base-400 text-cyan-50 rounded-box w-52"
        >
          <li>
            <Link to="/login" className="justify-between">
              Login
            </Link>
          </li>
          <li>{profile?.email && <span>{profile.email}</span>}</li>
          {profile?.email ? (
            <button onClick={handleSignOut} className="btn btn-sm">
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Login</button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
