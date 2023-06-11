import React from "react";
import { FaCameraRetro, FaUnlock } from "react-icons/fa";

const Featured = () => {
  return (
    <div className=" md:flex gap-5 mt-20 justify-between  mx-auto mb-5 lg:px-5">
      <div className="card lg:w-1/3   shadow-2xl shadow-black transition-all duration-300 ease-in-out hover:shadow-teal-300  hover:shadow-2xl hover:scale-95 ">
        <div className="card-body">
          <div>
            <FaCameraRetro className="text-3xl text-blue-500" />
          </div>
          <h2 className="text-xl bold font-displayThree">
            Capture the Beauty of Summer
          </h2>
          <small>Join Our Photography Summer School</small>
          <ul>
            <li className="font-displayTwo">
              Highlight the essence of summer and how your photography summer
              school can provide participants with the perfect opportunity to
              capture the beauty of the season. Emphasize the hands-on learning
              experience, expert guidance, and the chance to explore and
              photograph stunning...
            </li>
          </ul>
          <div>
            <button className="btn btn-sm underline mt-10 hover:bg-gray-200">
              more
            </button>
          </div>
        </div>
      </div>
      <div className="card lg:w-1/3  shadow-2xl shadow-black transition-all duration-300 ease-in-out hover:shadow-teal-300  hover:shadow-2xl hover:scale-95">
        <div className="card-body">
          <div>
            <FaUnlock className="text-3xl text-blue-500" />
          </div>
          <h2 className="text-xl bold font-displayThree">
            Unlock Your Photography Potential
          </h2>
          <small>Enroll in Our Summer School Program</small>
          <ul>
            <li className="font-displayTwo">
              Focus on the potential growth and development that participants
              can achieve through your photography summer school. Highlight the
              comprehensive curriculum, including technical skills, composition
              techniques, post-processing tips, and more. Showcase testimonials
              or success stories from previous students who have honed their
              skills and achieved....
            </li>
          </ul>
          <div>
            <button className="btn btn-sm underline hover:bg-gray-200">
              more
            </button>
          </div>
        </div>
      </div>
      <div className="card lg:w-1/3 shadow-2xl shadow-black transition-all duration-300 ease-in-out hover:shadow-teal-300  hover:shadow-2xl hover:scale-95">
        <div className="card-body">
          <div>
            <FaCameraRetro className="text-3xl text-blue-500" />
          </div>
          <h2 className="text-xl bold font-displayThree">
            Immerse Yourself in a Creative Summer Adventure
          </h2>
          <small>Discover Our Photography Summer School</small>
          <ul>
            <li className="font-displayTwo">
              Highlight the unique and immersive experience your summer school
              offers to budding photographers. Emphasize the creative
              exploration, hands-on workshops, and field trips to picturesque
              locations. Showcase the vibrant and inspiring atmosphere of the
              program, where students can learn, share ideas, and build lasting
              connections with fellow...
            </li>
          </ul>
          <div>
            <button className="btn btn-sm underline hover:bg-gray-200">
              more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
