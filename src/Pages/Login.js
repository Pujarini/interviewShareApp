import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

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
        setLoading(false);
        setErrorMsg(errMsg);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
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

        {errorMsg && <Alert errorText={errorMsg} close={setErrorMsg} />}

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
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMsg("");
              }}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring text-black focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
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
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMsg("");
              }}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full text-dark"
            />
          </div>
          <div class="mt-6">
            <button class="cta-btn" type="submit">
              {loading ? (
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="40px"
                  viewBox="0 0 40 40"
                  stroke="white"
                  enable-background="new 0 0 40 40"
                  className="animate-spin"
                  // xml:space="preserve"
                >
                  <path
                    opacity="0.2"
                    fill="#fff"
                    d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                  />
                  <path
                    fill="#fff"
                    d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
          C22.32,8.481,24.301,9.057,26.013,10.047z"
                  ></path>
                </svg>
              ) : null}
              Sign In
            </button>
          </div>
          <div className="mt-6 text-center underline">
            <Link to="/register">Sign up for an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
