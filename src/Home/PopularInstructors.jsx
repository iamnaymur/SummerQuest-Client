import React, { useEffect, useState } from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const PopularInstructors = () => {
  // const { user, role} = useAuth();
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="mt-10 ">
      <h1 className="text-2xl bold font-displayThree text-center mb-10">
        Our Popular instructors
      </h1>
      <div className="grid gap-2 container mx-auto grid-cols-2 lg:grid-cols-3 hover:bg-opacity-80">
        {instructors.slice(0, 6).map((instructor) => (
          <div className="relative w-auto h-96 hover:transition-colors bg-gray-300 bg-opacity-75">
            <img
              src={instructor.photo}
              alt="Card Image"
              className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-100"
            />
            <div className="absolute inset-20 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white bold font-displayThree text-2xl">
                {instructor.name}
              </p>
              <br />
              <div className="flex space-x-3 text-black text-2xl cursor-pointer">
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
                <FaYoutube></FaYoutube>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
