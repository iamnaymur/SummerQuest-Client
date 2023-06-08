// get the role for instructor,admin and student,
export const getUserRole = async (email) => {
  const response = await fetch(`http://localhost:5000/users/${email}`);
  const user = await response.json();
  console.log(user);
  return user?.role;
};
