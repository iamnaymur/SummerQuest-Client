import React from "react";

const ManageClasses = ({}) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table border border-gray-300 bg-white">
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
        <tbody>
          <tr>
            <td className="border-b px-4 py-2">Image</td>
            <td className="border-b px-4 py-2">Photo</td>
            <td className="border-b px-4 py-2">Name</td>
            <td className="border-b px-4 py-2">Email</td>
            <td className="border-b px-4 py-2">Seats</td>
            <td className="border-b px-4 py-2">1200</td>
            <td className="border-b px-4 py-2">Pending</td>
            <td className="border-b px-4 py-2">
              <button className="btn-sm bg-green-300">Approve</button>
              <button className="btn-sm bg-red-400">Deny</button>
              <button className="btn-sm bg-blue-500">FeedBack</button>
            </td>
          </tr>
        </tbody>

        {/* Add more rows here if needed */}
      </table>
    </div>
  );
};

export default ManageClasses;
