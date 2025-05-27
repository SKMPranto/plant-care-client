import React, { use, useEffect } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, NavLink } from "react-router";
// import { AuthContext } from "../Context/AuthContext";
import { TbLogin } from "react-icons/tb";
import { AuthContext } from "../AuthContext/AuthContext";

const Navbar = () => {
  const {user,handleLogOut}= use(AuthContext);

  // Handle LogOut
  const handle_LogOut = () => {
    handleLogOut()
  }



  // Theme Toggler || On toggle
  const handleThemeToggle = (e) => {
    const theme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  // On load (e.g. in useEffect)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div className="navbar p-0  mt-2 mb-4 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 underline underline-offset-1 text-xl font-bold"
                    : "text-xl font-bold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/All-Plants"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 underline underline-offset-1 text-xl font-bold"
                    : "text-xl font-bold"
                }
              >
                {" "}
                All-Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Add-Plants"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 underline underline-offset-1 text-xl font-bold"
                    : "text-xl font-bold"
                }
              >
                Add-Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/My-Plants"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 underline underline-offset-1 text-xl font-bold"
                    : "text-xl font-bold"
                }
              >
                My-Plants
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="hidden md:block cursor-pointer md:flex items-center gap-3"
        >
          <img
            className="w-8 md:w-10"
            src="https://i.ibb.co/XfMbvWqY/Green-leaves-logo-2-removebg-preview.png"
            alt="Image"
          />
          <span className="font-bold md:text-3xl tagesschrift-regular text-green-500 permanent-marker-regular">
            Plant Care
          </span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 underline underline-offset-1 text-xl font-bold"
                  : "text-xl font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/All-Plants"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 underline underline-offset-1  text-xl font-bold"
                  : "text-xl font-bold"
              }
            >
              {" "}
              All-Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Add-Plants"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 underline underline-offset-1  text-xl font-bold"
                  : "text-xl font-bold"
              }
            >
              Add-Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/My-Plants"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 underline underline-offset-1  text-xl font-bold"
                  : "text-xl font-bold"
              }
            >
              My-Plants
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-1">
        {/* Profile in navbar */}
        <div className="dropdown dropdown-hover dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Image" src={user ? user.photoURL : "https://i.ibb.co/jZDk7XVG/user-icon.png"} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>{user ? user.displayName : "Please LogIn First"}</li>
            <li>
              {user
                ? user.email || user.providerData[0]?.email
                : "Please LogIn First"}
            </li>
          </ul>
        </div>
        {/* Logout BTN */}
        <div>
          {user ? (
            <Link
              to="/"
              onClick={handle_LogOut}
              className="btn bg-green-500 text-white hover:text-green-500 hover:bg-white hover:border-green-500  md:text-lg rounded-4xl md:font-extrabold"
            >
              LogOut <HiOutlineLogout />
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="btn bg-green-500 text-white hover:text-green-500 hover:bg-white hover:border-green-500  md:text-lg rounded-4xl md:font-extrabold"
            >
              LogIn <TbLogin />
            </Link>
          )}
        </div>
        {/* Theme toggle Button */}
        <div className="navbar p-0 bg-base-100 mt-2 mb-4 w-23">
          <div className="navbar-end space-x-1">
            {/* Theme toggle Button */}
            <div>
              <label className="toggle text-base-content">
                <input
                  type="checkbox"
                  onChange={handleThemeToggle}
                  value="synthwave"
                  className="theme-controller"
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
