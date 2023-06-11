import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Gallery = () => {
  return (

    <div className="font-displayThree text-center ">
      <div className="m-20">
        <Slide className="text-2xl bold">Gallery</Slide>
        <Fade className="font-displayTwo text-sm font-semibold">Some of the best pictures taken by our students.</Fade>
      </div>
      <div className="px-5 py-2">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="lg:w-1/2 ">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/Hz2BWXQ/2000.webp"
              />
            </div>
            <div className="lg:w-1/2 ">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/Ct5VmxN/istockphoto-616904102-612x612.jpg"
              />
            </div>
            <div className="lg:w-full">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/vLnR0md/10-conseils-de-cadrage-paysage-tiers.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="lg:w-full">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/6mDgbch/7-H0-A58621.jpg"
              />
            </div>
            <div className="lg:w-1/2">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/7kPHgRR/Featured-image-1200-x-675-px.jpg"
              />
            </div>
            <div className="lg:w-1/2">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/r7dQ6w3/1525891879-886386-sam-burriss-457746-unsplashjpg.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
