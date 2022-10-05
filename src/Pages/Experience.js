import { doc, getDoc, writeBatch } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const Experience = () => {
  const [data, setData] = useState({});
  const [postBy, setPostBy] = useState(null);

  const navigate = useNavigate();

  const { user } = UserAuth();

  const { id } = useParams();

  const fetchExperienceDetails = async () => {
    const expRef = doc(db, "experiences", id);
    try {
      const docSnap = await getDoc(expRef);
      setData(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    const userRef = doc(db, "users", data.createdBy);
    try {
      const docSnap = await getDoc(userRef);
      setPostBy(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExperienceDetails();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id && data.createdBy) {
      fetchUser();
    }
    // eslint-disable-next-line
  }, [id, data]);

  const { workRole, category, company, experience } = data;

  const addToBookMark = () => {
    if (!user) {
      navigate("/login");
      // add alert to go login first and then bookmark
    } else {
      const batch = writeBatch();

      const docRef = doc(db, "bookmarks", user.uid);
      try {
        batch.set(docRef, {
          expId: id,
          ...data,
        });
        batch.commit();
        // batch.set(docRef, { expId: id, ...data });
        // batch.commit();
        // setDoc(docRef, { expId: id, ...data })
        //   .then(() => {
        //     navigate("/bookmarks");
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="md:container md:mx-auto h-screen bg-black flex items-center justify-center w-1/3 flex-col">
        <button
          className="text-white hover:bg-gray-400  font-bold py-2 px-4 rounded border bg-complement mt-6"
          onClick={addToBookMark}
        >
          <span>Back</span>
        </button>
        <div class="container  bg-dark m-auto  flex items-center justify-center flex-col p-5 text-white">
          <h1 className="text-4xl text-center font-extrabold mb-2">{`${workRole} for ${category} role at ${company}`}</h1>

          {postBy && (
            <div className="text-xl text-slate-400 mb-5">{`Created by : ${postBy.name}`}</div>
          )}
          <div className="border p-5 w-full flex items-center justify-center flex-col">
            <button
              className="text-white hover:bg-gray-400  font-bold py-2 px-4 rounded border bg-complement inline-flex items-center m-2"
              onClick={addToBookMark}
            >
              <span> + Add to Bookmarks </span>
            </button>
            {experience}
          </div>
          <div className="m-2 text-slate-400">{`You got the offer at ${company}? We would be adding this feature soon! `}</div>
        </div>
      </div>
    </>
  );
};

export default Experience;
