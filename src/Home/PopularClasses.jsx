import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  console.log(popular);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/popularClasses`).then((res) =>
      setPopular(res.data)
    );
  }, []);
  return (
    <div className="lg:px-10">
      <h1 className="text-2xl bold font-displayThree text-center m-20">
        Popular Classes
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2 ">
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
              <div className="card-body">
                <h2 className="card-title">{singleClass.className}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
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
