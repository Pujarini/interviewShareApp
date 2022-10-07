import React from "react";

const HowPage = () => {
  return (
    <div
      className="container md:mx-auto min-h-screen bg-dark flex w-full items-center justify-center text-white flex-col px-5 py-5"
      id="why"
    >
      <div className="flex flex-col items-center justify-center  flex-wrap flex-1 mx-5 md:mx-0">
        <h1 className="font-extrabold text-white text-3xl md:text-4xl text-center">
          Why InterviewShare?
        </h1>
        <p className="text-slate-400 text-xl py-5 md:w-1/2">
          I was preparing for my interviews and I had to juggle between 100 of
          resources and it was painful amidst job Search. So I thought of
          creating InterviewShare as a side project to make the juggle 0
        </p>
      </div>

      <h1 className="font-extrabold text-white text-3xl md:text-4xl mb-10">
        Features
      </h1>
      <ul className="flex flex-col justify-between text-xl flex-1 space-y-5 w-4/6 text-center">
        <li>You can create Interview Experiences once you login.</li>
        <li>You can edit and delete the Interview Experience you created.</li>
        <li>You can bookmark the experience.</li>
        <li>Find experience according to COMPANY, ROLE and SALARY</li>
      </ul>
    </div>
  );
};

export default HowPage;
