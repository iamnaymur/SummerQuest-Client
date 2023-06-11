import React from "react";

const Gallery = () => {
  return (
    // <div className="mt-10">
    //   <div className="text-center">
    //     <h1 className="font-displayThree text-3xl bold">Gallery Section </h1>
    //     <small>Some of the best photographs taken by our students</small>
    //   </div>
    //   <div className="card">
    //     <div className="relative overflow-hidden">
    //       <img
    //         src="https://i.guim.co.uk/img/media/707b5d59c62352359568203cc7d11fac2f94016b/0_0_2000_1500/master/2000.jpg?width=700&quality=85&auto=format&fit=max&s=0fb0ba31374993148cd1817a9b5cbc16"
    //         alt="Photograph"
    //         className="transition-transform duration-300  hover:scale-105"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="font-displayThree text-center ">
      <div className="m-20">
        <h1 className="text-2xl bold">Gallery</h1>
        <p>Some of the best pictures taken by our students.</p>
      </div>
      <div className="px-5 py-2">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 ">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/Hz2BWXQ/2000.webp"
              />
            </div>
            <div className="w-1/2 ">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/Ct5VmxN/istockphoto-616904102-612x612.jpg"
              />
            </div>
            <div className="w-full">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/vLnR0md/10-conseils-de-cadrage-paysage-tiers.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/6mDgbch/7-H0-A58621.jpg"
              />
            </div>
            <div className="w-1/2">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src="https://i.ibb.co/7kPHgRR/Featured-image-1200-x-675-px.jpg"
              />
            </div>
            <div className="w-1/2">
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
