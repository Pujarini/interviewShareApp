import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import AddModal from "./AddModal";

const AddNew = () => {
  const [showModal, setShowModal] = useState(false);
  const addTasks = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4  justify-center items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-90">
          Add new experience
        </h5>
        <button className="redirect-btn" onClick={addTasks}>
          Add
        </button>
      </div>
      {showModal && (
        <AddModal openModal={showModal} closeModal={setShowModal} />
      )}
    </>
  );
};

export default AddNew;
