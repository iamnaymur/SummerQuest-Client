import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  console.log(popular);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/popularClasses`).then((res) =>
      setPopular(res.data)
    );
  }, []);
  return (
    <div className="lg:px-10 ">
      <Slide className="text-2xl bold font-displayThree text-center m-20">
        Popular Classes
      </Slide>
      <div className="grid md:grid-cols-3 gap-2 ">
        {popular.slice(0, 6).map((singleClass) => (
          <div>
            <div className="w-auto h-full bg-base-100 shadow-xl  hover:-translate-y-5 transition-all">
              <figure>
                <img
                  src={singleClass.image}
                  className="w-full h-48 md:h-96"
                  alt="Popular Class"
                />
              </figure>
              <div className="p-5">
                <h2 className="card-title">{singleClass.className}</h2>
                <p>Instructor : {singleClass.name}</p>
                <p>Total Enrolled: {singleClass.enrolledStudents}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
