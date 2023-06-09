// import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FaDoorOpen, FaHome, FaUser } from "react-icons/fa";

const DashBoard = () => {
  const { user, role, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const userInfo = (
    <div className="font-displayTwo gap-5 mt-10 text-center flex justify-center items-center">
      <div>
        <FaUser className="text-xl" />
      </div>
      <div>
        <h1 className="text-xl bold">{user?.displayName}</h1>
        <Link  className="underline cursor-pointer">{user?.email}</Link>
      </div>
    </div>
  );
  return (
    <div className="drawer lg:drawer-open font-displayTwo">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col items-center justify-center">
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
                  className="rounded-full w-48 h-48 object-cover  mx-auto"
                  alt=""
                />
                {userInfo}
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
                </div>
                <div className="mt-8 flex flex-col items-start">
                  <Link to="/" className="btn">
                    <FaHome className="text-2xl" /> Home
                  </Link>
                  <button onClick={handleLogOut} className="btn">
                    <FaDoorOpen className="text-2xl" /> Logout
                  </button>
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
                  className="rounded-full w-48 h-48 object-cover mx-auto"
                  alt=""
                />
                {userInfo}
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
                </div>
                <div className="mt-8 flex flex-col items-start">
                  <Link to="/" className="btn">
                    <FaHome className="text-2xl" /> Home
                  </Link>
                  <button onClick={handleLogOut} className="btn">
                    <FaDoorOpen className="text-2xl" /> Logout
                  </button>
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
                  className="rounded-full w-48 h-48 object-cover mx-auto"
                  alt=""
                />
                {userInfo}
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
                </div>
                <div className="mt-8 flex flex-col items-start">
                  <Link to="/" className="btn">
                    <FaHome className="text-2xl" /> Home
                  </Link>
                  <button onClick={handleLogOut} className="btn">
                    <FaDoorOpen className="text-2xl" /> Logout
                  </button>
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
