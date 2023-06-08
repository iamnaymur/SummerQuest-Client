import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const InstructorCard = ({ instructor }) => {
  const { name, email, photo } = instructor;
  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden  bg-base-100 shadow-2xl transition-all duration-300 ease-in-out hover:shadow-blue-500 hover:scale-95">
      <img
        src={photo}
        alt="instructor image"
        className="h-48 w-full rounded shadow-gray-400 shadow-2xl object-cover"
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
