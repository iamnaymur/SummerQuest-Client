import React, { useEffect, useState } from "react";
import InstructorCard from "../Components/InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-displayTwo text-center mt-10">Lets meet our instructors</h1>
      <div className="grid grid-cols-3 mx-auto container mt-10 ">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
