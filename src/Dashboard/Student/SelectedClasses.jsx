import React from "react";

const SelectedClasses = () => {
  return (
    <div className="overflow-x-auto w-full" >
      <table className="table border border-gray-300 bg-white">
        {/* Head */}
        <thead>
          <tr>
            <th className="border-b px-4 py-2">#</th>
            <th className="border-b px-4 py-2">Class Name</th>
            <th className="border-b px-4 py-2">Delete</th>
            <th className="border-b px-4 py-2">Pay</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr>
            <td className="border-b px-4 py-2">1</td>
            <td className="border-b px-4 py-2">Cy Ganderton</td>
            <td className="border-b px-4 py-2">
              <button className="btn btn-red">Delete</button>
            </td>
            <td className="border-b px-4 py-2">
              <button className="btn btn-green">Pay</button>
            </td>
          </tr>
          {/* Add more rows here if needed */}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClasses;
