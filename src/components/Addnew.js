import React, { useState } from "react";
import AddModal from "./AddModal";

const AddNew = () => {
  const [showModal, setShowModal] = useState(false);
  const addTasks = () => {
    setShowModal(true);
  };

  console.log(showModal);
  return (
    <>
      <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4  justify-center items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Add new experience
        </h5>
        <button
          className="flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2 mr-2"
          onClick={addTasks}
        >
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
