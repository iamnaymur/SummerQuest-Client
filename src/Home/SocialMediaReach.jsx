import React from "react";
import CountUp from "react-countup";
import { FaRegHeart, FaInstagram, FaCameraRetro, FaStar } from "react-icons/fa";

const SocialMediaReach = () => {
  return (
    <div className="bg-black h-96 text-white grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <div className="text-center flex flex-col items-center">
        <FaRegHeart className="text-5xl" />
        <CountUp end={2342} duration={10} className="text-3xl bold" />
        <p>Happy Students</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <FaInstagram className="text-5xl" />
        <CountUp end={2342} duration={10} className="text-3xl bold" />
        <p>Instagram</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <FaCameraRetro className="text-5xl" />
        <CountUp end={2342} duration={10} className="text-3xl bold" />
        <p>Photos Taken</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <FaStar className="text-5xl" />
        <CountUp end={2342} duration={10} className="text-3xl bold" />
        <p>Rated Us</p>
      </div>
    </div>
  );
};

export default SocialMediaReach;
