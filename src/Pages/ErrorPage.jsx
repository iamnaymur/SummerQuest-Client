import React from "react";
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center p-20">
        <div>
          <img
            src="https://i.ibb.co/Zz4Ffsb/404-page-animation-example.gif"
            alt=""
          />
        </div>

        <Link
          className="btn w-1/4 mx-auto hover:bg-yellow-400 bg-red-400 border-none"
          to="/"
        >
          Go Back to Homepage.
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
