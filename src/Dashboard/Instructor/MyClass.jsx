import React from "react";
import useClasses from "../../hooks/useClasses";
import ClassesTable from "./ClassesTable";

const MyClass = () => {
  const [classes] = useClasses();
  console.log(classes);
  return (
    <div className="overflow-x-auto w-3/4 bg-gray-400 rounded-lg ">
      <table className="table text-lg">
        {/* head */}
        <thead className="text-xl h-20">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Enrolled students</th>
          </tr>
        </thead>
        {classes.map((singleClass, index) => (
          <ClassesTable
            index={index}
            singleClass={singleClass}
            key={singleClass._id}
          ></ClassesTable>
        ))}
      </table>
    </div>
  );
};

export default MyClass;
