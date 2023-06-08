import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

const ApprovedClasses = () => {
  const [approvedClasses, setApprovedClasses] = useState([]);
  const { role } = useAuth();
  console.log(approvedClasses);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/approvedClasses`)
      .then((res) => res.json())
      .then((data) => setApprovedClasses(data));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-center font-displayTwo  bold text-3xl ">
        All our available classes{" "}
      </h1>
      <div className="mt-10 container mx-auto">
        {approvedClasses.map((singleClass) => (
          <div key={singleClass._id}>
            {" "}
            <div
              className={`w-80 shadow-xl transition-all duration-300 ease-in-out  hover:shadow-2xl hover:scale-105 ${
                singleClass.seats === "0" ? "bg-red-400" : "bg-blue-500"
              }`}
            >
              <img
                src={singleClass.image}
                alt="Shoes"
                className="transition-all duration-300 ease-in-out transform "
              />

              <div className="card-body">
                <h2 className="card-title">{singleClass.className}</h2>
                <p>
                  <span className="bold">Instructor Name:</span>{" "}
                  {singleClass.name}
                </p>
                <p>
                  <span className="bold">Email:</span> {singleClass.email}
                </p>
                <p>
                  <span className="bold">Price:</span> ${singleClass.price}
                </p>
                <p>
                  <span className="bold">
                    Available seats: {singleClass.seats}
                  </span>
                </p>
                <div className="flex justify-center">
                  <button
                    disabled={
                      singleClass.seats === "0" ||
                      role === "admin" ||
                      role === "instructor"
                    }
                    className="btn primary-button text-white transition-all duration-300 ease-in-out hover:bg-green-700"
                  >
                    Select Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedClasses;
