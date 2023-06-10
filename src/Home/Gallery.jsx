import React from "react";

const Gallery = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="font-displayThree text-3xl bold">Gallery Section </h1>
        <small>Some of the best photographs taken by our students</small>
      </div>
      <div className="card">
        <div className="relative overflow-hidden">
          <img
            src="https://i.guim.co.uk/img/media/707b5d59c62352359568203cc7d11fac2f94016b/0_0_2000_1500/master/2000.jpg?width=700&quality=85&auto=format&fit=max&s=0fb0ba31374993148cd1817a9b5cbc16"
            alt="Photograph"
            className="transition-transform duration-300  hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
