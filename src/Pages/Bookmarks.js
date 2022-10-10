import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardLoader from "../components/CardLoader";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const Bookmarks = () => {
  const [bookmark, setBookmark] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = UserAuth();

  const { uid } = user;

  const navigate = useNavigate();

  const fetchBookMarks = async () => {
    const bookMarkRef = doc(db, "bookmarks", uid);
    try {
      const docSnap = await getDoc(bookMarkRef);
      if (docSnap.data().bookmark) {
        setBookmark(docSnap.data().bookmark);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchBookMarks();
    // eslint-disable-next-line
  }, [uid]);

  return (
    <div className="container md:mx-auto h-screen flex  items-center justify-evenly flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap bg-dark px-5 relative">
      <button
        className="redirect-btn left-5 absolute top-0"
        onClick={() => navigate("/")}
      >
        <span>Back</span>
      </button>
      <h1 className="font-bold  text-white text-5xl pt-10">Your Bookmarks</h1>

      {loading && <CardLoader />}

      {bookmark && bookmark.length > 0 ? (
        bookmark.map(({ data, id }) => {
          return (
            <div
              className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4"
              onClick={() => navigate(`/experience/${id}`)}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {`${data.workRole} - ${data.category} Experience`}
              </h5>
              <div class="px-2 pt-4 pb-2">
                <span class="pill">{data.company}</span>
                <span class="pill">{data.result}</span>
                <span class="pill">{`${data.salary} LPA`}</span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-slate-400 text-xl py-5 md:w-1/2">
          You got no Interview Experiences Bookmarked!
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
