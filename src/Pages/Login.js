import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const navigate = useNavigate();

  const { loginUser } = UserAuth();

  const loginExistingUser = async (email, password) => {
    await loginUser(email, password)
      .then((userCred) => {
        if (userCred.user.uid) {
          navigate("/");
        }
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        const errMsg = err.message;
        console.log(errMsg);
        // setError(errMsg);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      loginExistingUser(email, password);
    }
  };
  return (
    <div className="md:container md:mx-auto  h-screen bg-dark flex flex-col sm:justify-center items-center justify-center pt-6 sm:pt-0  text-white">
      <div className="sm:max-w-md p-8 mx-auto">
        <div className="text-center mb-10">
          <h2 className="mb-2 text-5xl font-extrabold text-white sm:text-4xl">
            Welcome to InterviewShare.
          </h2>
          <span className="mb-10 text-slate-400 text-center">
            one-stop platform to get ready for your dream job
          </span>
        </div>
        <h2 className="mb-10 text-4xl font-extrabold text-white "> Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 text-white" for="email">
              Email-Address
            </label>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-white" for="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full text-dark"
            />
          </div>
          <div class="mt-6">
            <button
              class="w-full inline-flex items-center justify-center px-4 py-2 bg-complement border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-400 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
              type="submit"
            >
              Sign In
            </button>
          </div>
          {/* <div class="mt-6">
            <span className="text-red-500 text-center">{error}</span>
          </div> */}
          <div className="mt-6 text-center underline">
            <Link to="/register">Sign up for an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
