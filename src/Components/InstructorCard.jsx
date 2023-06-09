import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const InstructorCard = ({ instructor }) => {
  const { name, email, photo } = instructor;
  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden mt-20 bg-base-100 shadow-2xl transition-all duration-300 ease-in-out hover:shadow-teal-300 hover:scale-95 mb-5">
      <img
        src={photo}
        alt="instructor image"
        className="h-80 w-80 rounded shadow-gray-400 shadow-2xl object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mb-4">{email}</p>

        <div className="mt-6">
          <a className="text-primary-500 hover:text-primary-700 transition-colors duration-300">
            You can also follow here
            <div className="flex space-x-3 text-2xl mt-3">
              <FaFacebook></FaFacebook>
              <FaLinkedin></FaLinkedin>
              <FaYoutube></FaYoutube>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
