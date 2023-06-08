import React from "react";
import { useAuth } from "../hooks/useAuth";

const PopularInstructors = () => {
  const { user, role} = useAuth();
  console.log(user?.displayName, role);
  return (
    <div>
      <h1>Popular instructors here</h1>
    </div>
  );
};

export default PopularInstructors;
