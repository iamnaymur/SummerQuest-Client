import React from "react";
import useStudentClasses from "../../hooks/useStudentsClasses";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const [studentClasses, loading, refetch] = useStudentClasses();

  const handleDelete = (classId) => {
    fetch(`${import.meta.env.VITE_API_URL}/studentClasses/${classId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Class deleted successfully");
        }
      });
  };
  console.log(studentClasses);
  return (
    <div className="overflow-x-auto w-3/4">
      <table className="table border border-gray-300 bg-white">
        {/* Head */}
        <thead>
          <tr>
            <th className="border-b px-4 py-2">#</th>
            <th className="border-b px-4 py-2">Image</th>
            <th className="border-b px-4 py-2">Class Name</th>
            <th className="border-b px-4 py-2">Price</th>
            <th className="border-b px-4 py-2">Delete</th>
            <th className="border-b px-4 py-2">Pay</th>
          </tr>
        </thead>
        {studentClasses.map((newClass, index) => (
          <tbody key={newClass._id}>
            <tr>
              <td className="border-b px-4 py-2">{index + 1}</td>
              <td className="border-b px-4 py-2">
                <img src={newClass.image} className="w-12 h-10" alt="" />
              </td>
              <td className="border-b px-4 py-2">{newClass.className}</td>
              <td className="border-b px-4 py-2">{newClass.price}</td>
              <td className="border-b px-4 py-2">
                <button
                  onClick={() => handleDelete(newClass._id)}
                  className="btn btn-red hover:bg-red-500"
                >
                  Delete
                </button>
              </td>
              <td className="border-b px-4 py-2">
                <Link
                  to={`/dashboard/payment/${newClass._id}`}
                  className="btn btn-green hover:bg-blue-500"
                >
                  Pay
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
        {/* {studentClasses.map(newClass)=><tbody>
          
        </tbody>} */}
      </table>
    </div>
  );
};

export default SelectedClasses;
