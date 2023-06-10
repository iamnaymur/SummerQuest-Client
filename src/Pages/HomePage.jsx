import React from "react";
import Banner from "../Home/Banner";
import PopularClasses from "../Home/PopularClasses";
import PopularInstructors from "../Home/PopularInstructors";
import Featured from "../Home/Featured";
import Gallery from "../Home/Gallery";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Featured></Featured>
      <Gallery></Gallery>
    </div>
  );
};

export default HomePage;
