import React, { useEffect, useState } from "react";
import InstructorCard from "../Components/InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="grid grid-cols-3 mx-auto container mt-10 ">
      {instructors.map((instructor) => (
        <InstructorCard
          key={instructor}
          instructor={instructor}
        ></InstructorCard>
      ))}
    </div>
  );
};

export default Instructors;
