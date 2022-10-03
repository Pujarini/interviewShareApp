import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const AddModal = ({ openModal, closeModal }) => {
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState("");
  const [workRole, setworkRole] = useState(null);
  const [category, setCategory] = useState(null);
  const [result, setResult] = useState(null);
  const [salary, setSalary] = useState("");

  let resultOptions = ["Offered", "Not Offered"];
  let options = [
    "frontend",
    "backend",
    "full-stack",
    "devOps",
    "security",
    "cloud",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "experiences"), {
        company: company,
        experience: experience,
        workRole: workRole,
        category: category,
        result: result,
        salary: salary,
        created: Timestamp.now(),
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {openModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-gray-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                    Add new Interview Experience
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => closeModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <form className="p-2 m-4" onSubmit={handleSubmit}>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                    <label
                      for="company"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company you interviewed with
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <textarea
                      id="message"
                      rows="4"
                      value={experience}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your interview experience here"
                      onChange={(e) => setExperience(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="floating_role"
                      id="floating_Role"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={workRole}
                      onChange={(e) => setworkRole(e.target.value)}
                    />
                    <label
                      for="floating_Role"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Role you were interviewing for
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <label
                      for="result"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Category
                    </label>
                    <select
                      id="result"
                      value={category}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {options.map((option) => (
                        <option value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                      <label
                        for="result"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Interview Result
                      </label>
                      <select
                        id="result"
                        value={result}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setResult(e.target.value)}
                      >
                        {resultOptions.map((option) => (
                          <option value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                      <label
                        for="salary"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Salary Range (CTC in LPA)
                      </label>
                      <input
                        type="number"
                        id="salary"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => closeModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      //   onClick={addData}
                    >
                      Add Experience
                    </button>
                  </div>
                </form>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddModal;
