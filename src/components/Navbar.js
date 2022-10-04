import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto border-2 border-blue-900">
        <Link to="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
            InterViewShare
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
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  md:bg-transparent dark:border-gray-700 ">
            <li className="block py-4 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-gray-100 md:border-0 md:hover:text-gray-700 md:p-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-700">
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="block py-4 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-gray-100 md:border-0 md:hover:text-gray-700 md:p-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-700"
              >
                About
              </a>
            </li>
            <li className="block py-4 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-gray-100 md:border-0 md:hover:text-gray-700 md:p-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-700">
              <a href="#">Interview Experiences</a>
            </li>
            <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <Link to="login">
                <button
                  type="button"
                  className="rounded border border-gray-200 py-2.5 px-5 text-black hover:text-white bg-gray-400"
                >
                  Login
                </button>
              </Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <Link to="register">
                <button
                  type="button"
                  className="rounded border border-gray-200 py-2.5 px-5 text-black hover:text-white bg-gray-400"
                >
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
