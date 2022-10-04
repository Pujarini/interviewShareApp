import React from "react";
import AddModal from "./AddModal";
import AddNew from "./Addnew";
import Cards from "./Cards";

const ShareExperiences = () => {
  return (
    <div className="md:container md:mx-auto px-4 h-5/6 flex  items-center justify-evenly flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap">
      <AddNew />
      <Cards />
      <AddModal />
    </div>
  );
};

export default ShareExperiences;
