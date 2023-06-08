import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";

const ApprovedClasses = () => {
  const [approvedClasses, setApprovedClasses] = useState([]);
  const { role, user } = useAuth();
  // console.log(approvedClasses);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/approvedClasses`)
      .then((res) => res.json())
      .then((data) => setApprovedClasses(data));
  }, []);

  const handleStudentClasses = (singleClass) => {
    const { _id, className, email, image, name, price, seats, status } =
      singleClass;
    // console.log(singleClass);
    // console.log(_id,email)
    if (user && role === "student") {
      const orderClass = {
        classId: _id,
        className,
        instructorEmail: email,
        instructorName: name,
        image,
        price,
        seats,
        status,
      };
      fetch(`${import.meta.env.VITE_API_URL}/selectedClasses`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(orderClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Added to student dashboard");
          }
        });
    } else {
      toast.error("Please login first to get into");
    }
  };
  return (
    <div className="mt-10">
      <h1 className="text-center font-displayTwo  bold text-3xl ">
        All our available classes{" "}
      </h1>
      <div className="mt-10 container mx-auto grid grid-cols-3">
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
                alt="Course Image"
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
                    onClick={() => handleStudentClasses(singleClass)}
                    disabled={
                      singleClass.seats === "0" ||
                      role === "admin" ||
                      role === "instructor"
                    }
                    className="btn primary-button text-white transition-all duration-300 ease-in-out hover:bg-gray-300 hover:text-black"
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
