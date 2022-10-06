import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
// import HowPage from "../components/HowPage";
import Navbar from "../components/Navbar";
import ShareExperiences from "../components/ShareExperiences";
// import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ShareExperiences />
      {/* <HowPage /> */}
      {/* <Team /> */}
      <Footer />
    </>
  );
};

export default Home;
