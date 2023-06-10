import axios from "axios";
import React, { useEffect, useState } from "react";

const EnrolledClasses = () => {
  const [enrolledClass, setEnrolledClass] = useState([]);
  console.log(enrolledClass);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/bookedClasses`).then((res) =>
      setEnrolledClass(res.data)
    );
  }, []);

  return (
    <div className="grid lg:grid-cols-3">
      {enrolledClass.map((enrolled) => (
        <div key={enrolled._id}>
          <div className="mb-5 mx-5 h-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-80 h-48 p-5"
                src={enrolled.image}
                alt="enrolled class"
              />
            </figure>
            <div className="text-start">
              <h2 className="text-xl text-center font-displayThree font-semibold">
                {enrolled.className}
              </h2>
              <div className="px-5">
                <p>Instructor Name: {enrolled.instructorName}</p>
                <small>Transaction Id: {enrolled.transactionId}</small>
                <br />
                <small>Payment Date: {enrolled.date.slice(0, 10)}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnrolledClasses;
