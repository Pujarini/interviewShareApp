import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("logged out");
      })
      .catch((err) => {
        console.log("error while logout");
      });
  };

  const openBookMarked = () => {
    navigate("/bookmarks");
  };
  return (
    <nav className="bg-dark border-gray-200 px-2 sm:px-4 py-2.5 md:container md:mx-auto ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <span className="self-center text-xl font-black whitespace-nowrap text-white">
            InterViewShare .
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="true"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  md:bg-transparent dark:border-gray-700 ">
            <li className="block py-4 pr-4 pl-3 text-white rounded hover:bg-complement md:hover:bg-complement md:border-0 md:hover:text-complement md:p-2 dark:text-white md:dark:hover:text-white dark:hover:bg-complement-300 dark:hover:text-white md:dark:hover:bg-complement">
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                href="#why"
                aria-current="page"
                className="block py-4 pr-4 pl-3 text-white rounded hover:bg-complement md:hover:bg-complement md:border-0 md:hover:text-complement md:p-2 dark:text-white md:dark:hover:text-white dark:hover:bg-complement-300 dark:hover:text-white md:dark:hover:bg-complement"
              >
                About
              </a>
            </li>

            {/* <li className="block py-4 pr-4 pl-3 text-white rounded hover:bg-complement md:hover:bg-complement md:border-0 md:hover:text-complement md:p-2 dark:text-white md:dark:hover:text-white dark:hover:bg-complement-300 dark:hover:text-white md:dark:hover:bg-complement">
              <a href="#">Interview Experiences</a>
            </li> */}
            {user && (
              <>
                <li
                  className="block py-4 pr-4 pl-3 text-white rounded hover:bg-complement md:hover:bg-complement md:border-0 md:hover:text-complement md:p-2 dark:text-white md:dark:hover:text-white dark:hover:bg-complement-300 dark:hover:text-white md:dark:hover:bg-complement"
                  onClick={openBookMarked}
                >
                  BookMarks
                </li>
                <li
                  className="block py-4 pr-4 pl-3 text-white rounded hover:bg-complement md:hover:bg-complement md:border-0 md:hover:text-complement md:p-2 dark:text-white md:dark:hover:text-white dark:hover:bg-complement-300 dark:hover:text-white md:dark:hover:bg-complement"
                  // onClick={handleLogout}
                >
                  Welcome User
                </li>
                <li
                  className="block py-4 pr-4 pl-3 text-white rounded hover:bg-complement md:hover:bg-complement md:border-0 md:hover:text-complement md:p-2 dark:text-white md:dark:hover:text-white dark:hover:bg-complement-300 dark:hover:text-white md:dark:hover:bg-complement"
                  onClick={handleLogout}
                >
                  Log Out
                </li>
              </>
            )}
            {!user && (
              <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to="login">
                  <button
                    type="button"
                    className="rounded py-2.5 px-5 text-white hover:text-gray-200 bg-complement"
                  >
                    Login
                  </button>
                </Link>
              </li>
            )}
            {!user && (
              <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <Link to="register">
                  <button
                    type="button"
                    className="rounded py-2.5 px-5 text-white hover:text-gray-200 bg-complement"
                  >
                    Register
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
