import React from "react";

const ClassesTable = ({
  singleClass,
  handleApprovedStatus,
  handleDenyStatus,
}) => {
  const { image, className, name, email, seats, price, status, _id } =
    singleClass;
  return (
    <tbody>
      <tr>
        <td className="border-b px-4 py-2">
          <img src={image} className="w-12 h-10" alt="" />
        </td>
        <td className="border-b px-4 py-2">{className}</td>
        <td className="border-b px-4 py-2">{name}</td>
        <td className="border-b px-4 py-2">{email}</td>
        <td className="border-b px-4 py-2">{seats}</td>
        <td className="border-b px-4 py-2">{price}</td>
        <td className="border-b px-4 py-2">{status}</td>
        <td className="border-b px-4 py-2 space-x-2">
          <button
            onClick={() => {
              handleApprovedStatus(_id);
            }}
            disabled={status === "approved" && "denied"}
            // className="btn-sm bg-green-300 rounded-lg"
            className={`flex-grow-0 btn-sm ${
              status === "approved" && "denied"
                ? "bg-white && rounded-lg"
                : "bg-green-500 && rounded-lg"
            }`}
          >
            Approve
          </button>
          <button
            onClick={() => handleDenyStatus(_id)}
            disabled={status === "approved" && "denied"}
            className={`flex-grow-0 btn-sm ${
              status === "denied" && "approved"
                ? "bg-white && rounded-lg"
                : "bg-red-500 && rounded-lg"
            }`}
          >
            Deny
          </button>
          <button className="btn-sm bg-blue-500  rounded-lg">FeedBack</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ClassesTable;
