import { doc, getDoc, setDoc, arrayUnion, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const Experience = () => {
  const [data, setData] = useState({});
  const [postBy, setPostBy] = useState(null);
  const [bookMarked, setBookMarked] = useState(false);

  const navigate = useNavigate();

  const { user } = UserAuth();

  const { id } = useParams();

  const fetchExperienceDetails = async () => {
    const expRef = doc(db, "experiences", id);
    try {
      const docSnap = await getDoc(expRef);
      console.log(docSnap.data());
      setData(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    const userRef = doc(db, "users", data.createdBy);
    try {
      const docSnap = await getDoc(userRef);
      // console.log(docSnap.data());
      setPostBy(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllExperiences = async () => {
    const docRef = doc(db, "bookmarks", user.uid);
    const docSnap = await getDoc(docRef);
    const { bookmark } = docSnap.data();
    bookmark.forEach((item) => {
      console.log(item.id, id);
      if (item.id === id) {
        setBookMarked(true);
      }
    });
    // const {id : bookMarkId}= bookmark
    // console.log(bookmark, "data");
    // if(bookmark)
  };

  useEffect(() => {
    fetchExperienceDetails();
    fetchAllExperiences();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id && data.createdBy) {
      fetchUser();
    }
    // eslint-disable-next-line
  }, [id, data]);

  const { workRole, category, company, experience } = data;

  const addToBookMark = async () => {
    if (!user) {
      navigate("/login");
      // add alert to go login first and then bookmark
    } else {
      const docRef = doc(db, "bookmarks", user.uid);
      const expData = { data, id };
      try {
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data(), "data");
        if (docSnap.exists()) {
          await updateDoc(docRef, {
            bookmark: arrayUnion(expData),
          });
          console.log("Document data:", docSnap.data());
        } else {
          setDoc(docRef, { bookmark: arrayUnion(expData) });
          console.log("created");
        }
        navigate("/bookmarks");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="container md:mx-auto h-screen bg-black flex items-center justify-center  flex-col relative">
        <button
          className="redirect-btn left-10 absolute top-0 hover:scale-105"
          onClick={() => navigate(-1)}
        >
          <span>Back</span>
        </button>
        <div
          class="container  bg-dark m-auto  flex items-center justify-center flex-col p-5 text-white"
          // onClick={() => openExperience(id)}
        >
          <h1 className="text-3xl md:5xl text-center font-bold mb-2">{`${workRole} for ${category} role at ${company}`}</h1>

          {postBy && (
            <div className="text-xl text-slate-400 mb-5">{`Created by : ${postBy.name}`}</div>
          )}
          <div className="border py-2 w-full flex items-center justify-center flex-col">
            <button
              className={`redirect-btn mt-2 hover:scale-110 ${
                bookMarked
                  ? "cursor-not-allowed disabled:opacity-30"
                  : "cursor-pointer"
              }`}
              onClick={addToBookMark}
            >
              <span>
                {bookMarked ? "Added to Your BookMarks!" : "+ Add to Bookmarks"}
              </span>
            </button>
            <p className="py-5">{experience}</p>
          </div>
          <div className="my-5 text-slate-400">{`You got the offer at ${company}? We would be adding this feature soon! `}</div>
        </div>
      </div>
    </>
  );
};

export default Experience;
