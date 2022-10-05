import { doc, getDoc, setDoc } from "firebase/firestore";
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

  const { workRole, category, company, experience, createdBy } = data;

  const addToBookMark = async () => {
    if (!user) {
      navigate("/login");
      // add alert to go login first and then bookmark
    } else {
      const docRef = doc(db, "bookmarks", createdBy);
      try {
        await setDoc(docRef, { expId: id, ...data });
        navigate("/bookmarks");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className=" h-screen bg-black flex items-center justify-center">
      {/* <button>Back</button> */}
      <div class="container  bg-white m-auto  flex items-center justify-center flex-col">
        <h1>{`${workRole} for ${category} role at ${company}`}</h1>

        {postBy && <div>{`Created by : ${postBy.name}`}</div>}
        <div>{experience}</div>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={addToBookMark}
        >
          <span>Bookmark this experience</span>
        </button>
        <div>Created on</div>
      </div>
    </div>
  );
};

export default Experience;
