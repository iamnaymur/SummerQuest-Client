import React, { useState } from "react";
import AddClassForm from "../../forms/addClassForm";
import { useAuth } from "../../hooks/useAuth";
import { addClass } from "../../UsersAPI/classes";
import { toast } from "react-hot-toast";

const AddClass = () => {
  const { user } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.class.value;
    const image = form.image.value;
    const name = user?.displayName;
    const email = user?.email;
    const seats = form.seats.value;
    const price = form.price.value;
    const status = "pending";

    const newClass = {
      className,
      image,
      name,
      email,
      seats: parseFloat(seats),
      price: parseFloat(price),
      status,
    };
    console.log(newClass);

    addClass(newClass)
      .then((data) => {
        console.log(data);
        toast.success("Class added successfully");
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-3/4 mx-auto ">
      <AddClassForm  handleSubmit={handleSubmit}></AddClassForm>
    </div>
  );
};

export default AddClass;
