import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import Alert from "../components/Alert";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [workRole, setWorkRole] = useState("");
  const [org, setOrg] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  let navigate = useNavigate();

  const { createUser } = UserAuth();

  const createNewUser = async (email, password) => {
    try {
      const userCred = await createUser(email, password);
      const uid = userCred.user.uid;
      if (uid) {
        const docRef = doc(db, "users", uid);
        await setDoc(docRef, {
          uid: userCred.user.uid,
          name,
          authProvider: "local",
          email,
          role: workRole,
          organization: org,
        });

        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setErrorMessage("Passwords do not match");
    } else {
      if (email && password) {
        setLoading(true);
        createNewUser(email, password);
      }
    }
  };

  return (
    <div className="md:container md:mx-auto  min-h-screen bg-dark flex w-full flex-col sm:justify-center items-center justify-center pt-6 sm:pt-0  text-white">
      <div className="sm:max-w-md p-10 m-2 mx-auto">
        <div className="text-center mb-10">
          <h2 className="mb-2 text-5xl font-extrabold sm:text-4xl">
            Welcome to InterviewShare.
          </h2>
          <span className="mb-10 text-slate-400 text-center">
            one-stop platform to get ready for your dream job
          </span>
        </div>
        <h2 className="mb-10 text-4xl font-extrabold text-center">
          Create your account
        </h2>

        {errorMessage && (
          <Alert errorText={errorMessage} close={setErrorMessage} />
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-black mt-4">
            <label className="block mb-1 text-white" for="email">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
                setErrorMessage("");
              }}
              className="input-box"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" for="email">
              Your role (current)
            </label>
            <input
              id="work-role"
              type="text"
              name="work-role"
              required
              value={workRole}
              onChange={(e) => {
                setWorkRole(e.target.value);
                setErrorMessage("");
              }}
              className="input-box"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" for="email">
              Currently working at
            </label>
            <input
              id="org"
              type="text"
              name="org"
              value={org}
              required
              onChange={(e) => {
                setOrg(e.target.value);
                setErrorMessage("");
              }}
              className="input-box"
            />
          </div>
          <div class="mb-4">
            <label className="block mb-1 text-white" for="email">
              Email-Address
            </label>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
              className="input-box"
            />
          </div>
          <div class="mb-4">
            <label className="block mb-1 text-white" for="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMessage("");
              }}
              className="input-box"
            />
          </div>
          <div class="mb-4">
            <label className="block mb-1 text-white" for="password">
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrorMessage("");
              }}
              className="input-box"
            />
          </div>
          <div className="mt-6">
            <button className="cta-btn" type="submit">
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
