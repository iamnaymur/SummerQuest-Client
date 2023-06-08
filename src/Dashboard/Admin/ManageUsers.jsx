import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { toast } from "react-hot-toast";
import useUsers from "../../hooks/useUsers";

const ManageUsers = () => {
  const [users, , refetch] = useUsers();

  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("successfully made admin");
          refetch();
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("successfully made instructor");
          refetch();
        }
      });
  };
  return (
    <div className="overflow-x-auto w-2/3">
      <table className="table border border-gray-300 bg-white">
        {/* Head */}
        <thead>
          <tr>
            <th className="border-b px-4 py-2">#</th>
            <th className="border-b px-4 py-2">User Name</th>
            <th className="border-b px-4 py-2">User Email</th>
            <th className="border-b px-4 py-2">Actions</th>
          </tr>
        </thead>

        {users.map((user, index) => (
          <UsersTable
            handleMakeInstructor={handleMakeInstructor}
            handleMakeAdmin={handleMakeAdmin}
            user={user}
            key={user._id}
            index={index}
          ></UsersTable>
        ))}

        {/* Add more rows here if needed */}
      </table>
    </div>
  );
};

export default ManageUsers;

