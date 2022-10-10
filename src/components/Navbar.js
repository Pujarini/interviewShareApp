import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setShowMenu(false);
    logout()
      .then(() => {
        console.log("logged out");
      })
      .catch((err) => {
        console.log("error while logout");
      });
  };

  const showMenuBar = () => {
    setShowMenu(!showMenu);
  };

  const openBookMarked = () => {
    navigate("/bookmarks");
  };
  return (
    <nav className="container mx-auto bg-black  shadow-md py-2 px-5 sticky top-0 z-50">
      <div className={`flex flex-wrap items-center justify-between`}>
        <Link to="/">
          <span className="text-white text-2xl font-bold px-5">
            InterViewShare.
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="text-white p-2 items-center md:hidden"
          aria-controls="navbar-default"
          aria-expanded="true"
          onClick={showMenuBar}
        >
          <span className="sr-only">Open main menu</span>
          {showMenu ? (
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="0"
                stroke-width="10"
                stroke="white"
              />
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                stroke-width="10"
                stroke="white"
              />
            </svg>
          ) : (
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
          )}
        </button>

        <div
          className={`md:border-0 md:m-0 ${
            showMenu
              ? "mobile-menu"
              : "hidden md:block md:w-auto w-full  border-slate-300 my-5 mx-2 rounded-md border"
          }  `}
        >
          <ul
            className={`text-white flex-col py-4  bg-transparent  md:bg-transparent md:flex md:flex-row md:space-x-5 `}
          >
            <li className="menu-items">
              <a href="#home" onClick={() => setShowMenu(false)}>
                Home
              </a>
            </li>
            <li className="menu-items">
              <a href="#why" onClick={() => setShowMenu(false)}>
                About
              </a>
            </li>
            {user && (
              <>
                <li className="menu-items" onClick={openBookMarked}>
                  BookMarks
                </li>
                <li className="menu-items">Welcome User</li>
                <li className="menu-items" onClick={handleLogout}>
                  Log Out
                </li>
              </>
            )}
            {!user && (
              <li className="menu-items">
                <Link to="login">
                  <button type="button" className="md:primary-btn">
                    Login
                  </button>
                </Link>
              </li>
            )}
            {!user && (
              <li className="menu-items">
                <Link to="register">
                  <button type="button" className="md:outline-btn">
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
