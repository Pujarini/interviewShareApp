import React from "react";
import Hero from "../images/hero.svg";

const HeroSection = () => {
  return (
    <div
      className="md:container md:mx-auto min-h-screen w-full sm:flex-col bg-dark flex  items-center justify-center"
      id="home"
    >
      <div className="flex-1 h-full p-28 sm:p-0 text-center flex flex-col justify-center items-start">
        <div>
          <h1 className="text-4xl text-center font-extrabold mb-6 text-white">
            Preparing for interviews ?
          </h1>
          <span className="text-xl text-slate-400">
            Get experiences from people who have already interviewed{" "}
          </span>

          <h1 className="text-3xl text-center font-extrabold mt-4 text-white">
            CREATE.{""} READ.{""} CRACK.
          </h1>
          <button
            type="button"
            className="rounded py-2.5 px-5 text-white hover:text-gray-200 bg-complement mt-10  text-center"
          >
            GET STARTED
          </button>
        </div>
      </div>
      <div className="flex-1 h-full">
        <img
          src={Hero}
          alt="hero-img"
          className="object-fit w-full p-10 h-5/6"
        />
      </div>
    </div>
  );
};

export default HeroSection;
