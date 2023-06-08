// import { useQuery } from "@tanstack/react-query";

// ${import.meta.env.VITE_API_URL}
// get the role for instructor,admin and student,
export const getUserRole = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`
  );
  const user = await response.json();
  // console.log(user);
  return user?.role;
};


