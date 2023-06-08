// import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const DashBoard = () => {
  const { user, role } = useAuth();
  // const [role, setRole] = useState(null);

  // useEffect(() => {
  //   if (user) {
  //     getUserRole(user?.email).then((data) => setRole(data));
  //   }
  // }, [user]);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <p className="text-center">
          <span className="text-2xl">Hello there {user?.displayName}</span>{" "}
          <br />
          Welcome on your dashboard! <br /> Please select the options on the
          sidebar to proceed further.
        </p> */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/*  admin dashboard here*/}
          {role && role == "admin" && (
            <div className="flex flex-col justify-center">
              <>
                <img
                  src={user?.photoURL || "anonymous.jpg"}
                  className="rounded-full w-48 mx-auto"
                  alt=""
                />
                <div className="mt-16">
                  <li>
                    <Link className="text-xl" to="/dashboard/manage-classes">
                      Manage Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manage-users" className="text-xl">
                      Manage Users
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                </div>
              </>
            </div>
          )}
          {/* student dashboard */}
          {role && role == "student" && (
            <div className="flex flex-col justify-center">
              <>
                <img
                  src={user?.photoURL}
                  className="rounded-full w-48 mx-auto"
                  alt=""
                />
                <div className="mt-16">
                  <li>
                    <Link className="text-xl" to="/dashboard/selected-classes">
                      Selected Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/enrolled-classes" className="text-xl">
                      Enrolled Classes
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                </div>
              </>
            </div>
          )}
          {/* instructors dashboard */}
          {role && role === "instructor" && (
            <div className="flex flex-col justify-center">
              <>
                <img
                  src={user?.photoURL}
                  className="rounded-full w-48 mx-auto"
                  alt=""
                />
                <div className="mt-16">
                  <li>
                    <Link className="text-xl" to="/dashboard/add-class">
                      Add a class
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/my-class" className="text-xl">
                      My classes
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                </div>
              </>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
