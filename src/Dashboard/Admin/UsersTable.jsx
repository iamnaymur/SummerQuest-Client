import React from "react";
import { toast } from "react-hot-toast";

const UsersTable = ({ user, index, handleMakeAdmin, handleMakeInstructor }) => {
  //   const { name, email } = user;
  return (
    <tbody>
      <tr>
        <td className="border-b px-4 py-2">{index + 1}</td>
        <td className="border-b px-4 py-2">{user?.name}</td>
        <td className="border-b px-4 py-2">{user?.email}</td>
        <td className="border-b px-4 py-2 flex flex-wrap gap-2 bold">
          <button
            onClick={() => handleMakeAdmin(user)}
            className={`flex-grow-0 btn-sm ${
              user?.role === "admin" && "instructor"
                ? "bg-white"
                : "bg-green-500"
            }`}
            disabled={user?.role === "admin"}
          >
            Make Admin
          </button>
          <button
            onClick={() => handleMakeInstructor(user)}
            className={`flex-grow-0 btn-sm ${
              user?.role === "instructor" && "admin"
                ? "bg-white"
                : "bg-yellow-500"
            }`}
            disabled={user?.role === "instructor"}
          >
            Make Instructor
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UsersTable;
