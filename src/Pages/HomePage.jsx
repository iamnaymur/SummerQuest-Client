import React from "react";
import Banner from "../Home/Banner";
import PopularClasses from "../Home/PopularClasses";
import PopularInstructors from "../Home/PopularInstructors";
import Featured from "../Home/Featured";
import Gallery from "../Home/Gallery";
import SocialMediaReach from "../Home/SocialMediaReach";
import OurFeatures from "../Home/OurFeatures";
import Testimonials from "../Home/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Featured></Featured>
      <SocialMediaReach/>
      <Gallery></Gallery>
      <OurFeatures />
      <Testimonials/>
    </div>
  );
};

export default HomePage;
