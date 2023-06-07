// import Container from "../Shared/Container";

import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to='/instructors'>Instructors</Link>
      </li>
      <li>
        <a>Classes</a>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-2xl font-displayOne"
        >
          Summer Quest
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="flex items-center ">
          <div className="avatar me-5">
            {user && (
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL} />
              </div>
            )}
          </div>
          {user ? (
            <Link
              onClick={handleLogOut}
              className="btn btn-primary primary-button border-none "
            >
              LogOut
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary primary-button border-none "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
