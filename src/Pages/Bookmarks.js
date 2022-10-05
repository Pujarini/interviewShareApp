import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const Bookmarks = () => {
  const [data, setData] = useState([]);
  const { user } = UserAuth();

  const { uid } = user;

  // const navigate = useNavigate();

  const fetchBookMarks = async () => {
    const bookMarkRef = doc(db, "bookmarks", uid);
    console.log(bookMarkRef);
    try {
      const docSnap = await getDoc(bookMarkRef);
      console.log(docSnap.data());
      const bookmarks = [];
      if (docSnap.data()) {
        bookmarks.push(docSnap.data());
        setData(bookmarks);
        console.log(bookmarks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookMarks();
    // eslint-disable-next-line
  }, [uid]);

  console.log(data);

  return (
    <div className="md:container md:mx-auto h-screen px-4  flex  items-center justify-evenly flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap">
      <h1 className="font-extrabold  text-white text-5xl">Your Bookmarks</h1>
      {/* {data && data.length > 0 ? (
        data.map((item) => {
          return (
            <div
              className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4"
              onClick={() => navigate(`/experience/${item.expId}`)}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {`${item.workRole} - ${item.category} Experience`}
              </h5>
              <div class="px-2 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.company}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.result}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {`${item.salary} LPA`}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading....</div>
      )} */}
    </div>
  );
};

export default Bookmarks;
