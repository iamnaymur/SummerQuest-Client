import React from "react";

const InstructorCard = ({ instructor }) => {
  const { name, email } = instructor;
  return (
    <div>
      <div className="card mx-5 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80p6JYKFoTxBDKcIKecyc1Twgq5BTY20wQw&usqp=CAU"
            alt="Shoes"
          />
        </figure>
        <div className="text-center">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="bold">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
