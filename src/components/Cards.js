import React from "react";

const Cards = () => {
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flex mr-2">
        <button
          href="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2 mr-2"
        >
          Edit
        </button>
        <button
          href="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-400 dark:focus:ring-blue-800 my-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Cards;
