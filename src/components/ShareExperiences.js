import React, { useState, useEffect } from "react";
import AddModal from "./AddModal";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CardLoader from "./CardLoader";

const ShareExperiences = () => {
  const [exp, setExp] = useState([]);
  const [openModal, setOpenModal] = useState({ edit: false, addNew: false });
  const [cardId, setCardId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { user } = UserAuth();

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "experiences"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setExp(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setLoading(false);
    });
  }, []);

  const deleteExperience = async (id) => {
    const taskDocRef = doc(db, "experiences", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  const editExperience = (id) => {
    setOpenModal({ edit: true, addNew: false });
    setCardId(id);
  };

  const addExperience = () => {
    if (!user) {
      navigate("/login");
    } else {
      setOpenModal({ edit: false, addNew: true });
    }
  };

  const closeModal = () => setOpenModal({ edit: false, addNew: false });

  const openExperience = (id) => {
    navigate(`/experience/${id}`);
  };

  return (
    <>
      <div
        className="md:container md:mx-auto min-h-screen flex  items-center justify-evenly flex-col sm:flex-col sm:flex-nowrap md:flex-col lg:flex-row xl:flex-row flex-wrap bg-dark overflow-y-scroll space-y-2 px-5 py-2 md:overscroll-none shadow-lg"
        id="exp"
      >
        <div className="text-center w-full py-5">
          <h1 className="font-extrabold  text-white text-3xl md:text-4xl">
            Find Interview Experiences here
          </h1>
          <div className="text-slate-400 text-2xl mt-4 sm:text-xl">
            Find according to role, companies and salaries
          </div>
        </div>

        <div className="block p-6 max-w-sm bg-dark rounded-lg border border-slate-200 shadow-md hover:bg-slate-400 dark:bg-dark dark:border-slate-400 dark:hover:bg-slate-400 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Add new experience
          </h5>
          <button
            className="flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2 mr-2"
            onClick={addExperience}
          >
            Add
          </button>
        </div>
        {loading && <CardLoader />}

        {exp &&
          exp.map(({ data, id }) => {
            return (
              <div className="block p-6 min-w-sm bg-dark rounded-lg border border-slate-200 shadow-md hover:bg-slate-400 dark:bg-dark dark:border-slate-400 dark:hover:bg-slate-400 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {`${data.workRole} - ${data.category} Experience`}
                </h5>
                <div class="px-2 pt-4 pb-2" onClick={() => openExperience(id)}>
                  <span class="pill">{data.company}</span>
                  <span class="pill">{data.result}</span>
                  <span class="pill">{`${data.salary} LPA`}</span>
                </div>
                {user && user.uid === data.createdBy && (
                  <div className="flex mr-2">
                    <button
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2 mr-2"
                      onClick={() => editExperience(id)}
                    >
                      Edit
                    </button>
                    <button
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-400 dark:focus:ring-blue-800 my-2"
                      onClick={() => deleteExperience(id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        <AddModal
          openModal={openModal}
          closeModal={closeModal}
          id={openModal.edit ? cardId : null}
        />
      </div>
    </>
  );
};

export default ShareExperiences;
