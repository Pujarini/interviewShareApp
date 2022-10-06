import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [workRole, setWorkRole] = useState("");
  const [org, setOrg] = useState("");
  const [password, setPassword] = useState("");
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
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      createNewUser(email, password);
    }
  };

  return (
    <div className="md:container md:mx-auto  h-screen bg-dark flex w-full flex-col sm:justify-center items-center justify-center pt-6 sm:pt-0  text-white">
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

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" for="email">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
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
              onChange={(e) => setWorkRole(e.target.value)}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
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
              onChange={(e) => setOrg(e.target.value)}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
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
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-3 border  text-dark border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
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
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-3 border text-dark border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-complement border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-400 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
