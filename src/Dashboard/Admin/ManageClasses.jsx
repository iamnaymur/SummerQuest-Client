import React from "react";
import useClasses from "../../hooks/useClasses";
import ClassesTable from "./ClassesTable";
import { toast } from "react-hot-toast";

const ManageClasses = () => {
  const [classes, loading, refetch] = useClasses();

  const handleDenyStatus = (classId) => {
    fetch(`${import.meta.env.VITE_API_URL}/class/denied/${classId}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.error("Class approval denied");
          refetch();
        }
      });
  };

  const handleApprovedStatus = (singleClassId) => {
    fetch(`${import.meta.env.VITE_API_URL}/class/approved/${singleClassId}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Class approved successfully");
          refetch();
        }
      });
  };
  return (
    <div className="overflow-x-auto w-5/6">
      <h1 className="text-center text-xl mb-10 bold">
        Manage all the classes below.
      </h1>
      <table className="table border border-gray-300 bg-white ">
        {/* Head */}
        <thead>
          <tr>
            <th className="border-b px-4 py-2">Class Image</th>
            <th className="border-b px-4 py-2">Class Name</th>
            <th className="border-b px-4 py-2">Instructor Name</th>
            <th className="border-b px-4 py-2">Instructor Email</th>
            <th className="border-b px-4 py-2">Available Seats</th>
            <th className="border-b px-4 py-2">Price</th>
            <th className="border-b px-4 py-2">Status</th>
            <th className="border-b px-4 py-2">Actions</th>
          </tr>
        </thead>

        {classes.map((singleClass) => (
          <ClassesTable
            handleDenyStatus={handleDenyStatus}
            handleApprovedStatus={handleApprovedStatus}
            singleClass={singleClass}
            key={singleClass._id}
          ></ClassesTable>
        ))}
      </table>
    </div>
  );
};

export default ManageClasses;
