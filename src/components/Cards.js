import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Cards = () => {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "experiences"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setExp(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const deleteExperience = async (id) => {
    console.log(id);
    const taskDocRef = doc(db, "experiences", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    exp &&
    exp.map(({ data, id }) => {
      return (
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {`${data.workRole} - ${data.category} Experience`}
          </h5>
          {/* <p className="font-normal text-gray-700 dark:text-gray-400">
            {data.experience}
          </p> */}
          <div class="px-2 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.company}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.result}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {`${data.salary} LPA`}
            </span>
          </div>
          <div className="flex mr-2">
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2 mr-2">
              Edit
            </button>
            <button
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-400 dark:focus:ring-blue-800 my-2"
              onClick={() => deleteExperience(id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    })
  );
};

export default Cards;
