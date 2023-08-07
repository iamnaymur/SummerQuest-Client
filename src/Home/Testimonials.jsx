import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import "./Testimonials.css";

// import required modules
import { Scrollbar } from "swiper";

const Testimonials = () => {
  return (
    <div className="container mx-auto mt-20 ">
      {/* <div className="text-center"></div> */}
      <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="flex justify-center ">
              <img
                style={{ width: "200px", height: "200px" }}
                className="rounded-full"
                src="https://i.ibb.co/FwyHKXQ/f90dba640426fb06b211099c975e37e7.jpg"
                alt=""
              />
            </div>
            <div className="leading-relaxed">
              <h1 className="text-center">
                "Amazing experience! Knowledgeable instructors, hands-on
                workshops, and breathtaking photo expeditions. Highly
                recommended!"
              </h1>
              <p className="mt-3 font-semibold text-center text-orange-400 text-md">
                {" "}
                - Sarah M.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className=" flex justify-center">
              <img
                style={{ width: "200px", height: "200px" }}
                className="rounded-full"
                src="https://i.ibb.co/2yh0TKr/download-1.jpg"
                alt=""
              />
            </div>
            <div className="leading-relaxed">
              <h1 className="text-center">
                "Best decision for my photography career. Valuable connections
                and portfolio feedback. Thank you!"
              </h1>
              <p className="mt-3 font-semibold text-center text-orange-400 text-md">
                {" "}
                - Alex R.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className=" flex justify-center">
              <img
                style={{ width: "200px", height: "200px" }}
                className="rounded-full"
                src="https://i.ibb.co/XDNbK3F/pexels-atef-khaled-1816654.jpg"
                alt=""
              />
            </div>
            <div className="leading-relaxed">
              <h1 className="text-center">
                "Game-changer! Access to pro equipment and editing classes
                boosted my skills. Unforgettable friendships formed."
              </h1>
              <p className="mt-3 font-semibold text-center text-orange-400 text-md">
                {" "}
                - Emma S.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
