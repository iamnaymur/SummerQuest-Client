import React from "react";

const ClassesTable = ({ singleClass, index }) => {
  const { className, status, feedback, students, enrolledStudents } =
    singleClass;
  return (
    <tbody className="h-16 font-semibold">
      {/* row 1 */}
      <tr className="bg-blue-400">
        <td>{index + 1}</td>
        <td>{className}</td>
        <td>{status}</td>
        <td>{status === "denied" ? feedback : "No feedback yet"}</td>
        {/* <td>{feedback}</td> */}
        <td>{enrolledStudents || "0"} </td>
      </tr>
    </tbody>
  );
};

export default ClassesTable;
