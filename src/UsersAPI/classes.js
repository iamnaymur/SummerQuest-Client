// add a class to database
export const addClass = async (classInfo) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/classes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(classInfo),
  });
  const data = await res.json();
  return data;
};

//update status

export const updateStatus = async (id, status) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/class/status/${id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }
  );
  const updatedStatus = await res.json();
  return updatedStatus;
};
