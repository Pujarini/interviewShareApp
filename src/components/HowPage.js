import React from "react";

const HowPage = () => {
  return (
    <div
      className="md:container md:mx-auto h-screen bg-dark flex w-full items-center justify-center text-white flex-col"
      id="why"
    >
      <div className="flex flex-col items-center justify-center  flex-wrap   flex-1">
        <h1 className="font-extrabold text-white text-5xl m-2 sm:text-3xl">
          Why InterviewShare?
        </h1>
        <p className="text-slate-400 m-2 w-4/6">
          I was preparing for my interviews and I had to juggle between 100 of
          resources and it was painful amidst job Search. So I thought of
          creating InterviewShare as a side project to make the juggle 0
        </p>
      </div>

      <h1 className="font-extrabold text-white text-5xl m-5">Features</h1>
      <ul className="flex flex-col items-start justify-between text-2xl gap-10 flex-1 m-10 list-disc w-4/6 text-center border p-20">
        <li>You can create Interview Experiences once you login.</li>
        <li>You can edit and delete the Interview Experience you created.</li>
        <li>You can bookmark the experience.</li>
        <li>Find experience according to COMPANY, ROLE and SALARY</li>
      </ul>
    </div>
  );
};

export default HowPage;
