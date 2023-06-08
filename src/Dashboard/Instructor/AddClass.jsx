import React, { useState } from "react";
import AddClassForm from "../../forms/addClassForm";
import { useAuth } from "../../hooks/useAuth";
import { addClass } from "../../UsersAPI/classes";

const AddClass = () => {
  const { user } = useAuth();
  const [status, setStatus] = useState("pending");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.class.value;
    const image = form.image.value;
    const name = user?.displayName;
    const email = user?.email;
    const seats = form.seats.value;
    const price = form.price.value;
    // const status = setStatus('pending');

    const newClass = { className, image, name, email, seats, price };

    addClass(newClass)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-3/4 mx-auto ">
      <AddClassForm
        status={status}
        setStatus={setStatus}
        handleSubmit={handleSubmit}
      ></AddClassForm>
    </div>
  );
};

export default AddClass;
