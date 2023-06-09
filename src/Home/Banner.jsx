import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div >
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-3/4">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="Image"
              className="w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="md:text-4xl font-bold font-displayTwo">
                <p className="animate__animated animate__fadeIn">
                  Welcome to Summer Quest.
                </p>

                <br />
                <Fade delay={1e3} cascade damping={1e-1}>
                  <small className="font-displayTwo text-sm">
                    Unleash Your Photographic Creativity!
                  </small>
                </Fade>
              </h1>
              <p className="md:text-lg font-displayTwo">
                <Fade delay={1e3}>
                  Capture moments that last a lifetime, explore breathtaking
                  landscapes, and master the art of photography. Join us on an
                  immersive summer adventure where your creativity knows no
                  bounds. Enroll now and embark on your transformative journey
                  with Summer Quest: Where memories become masterpieces.
                </Fade>
              </p>
              <h1 className="mt-10 text-2xl bold">
                You can now also follow us here!
              </h1>
              <div className="mt-4  flex justify-center gap-5 ">
                <Link href="#">
                  <FaFacebook className="w-20 h-16" />
                </Link>
                <Link href="#">
                  <FaInstagram className="w-20 h-16" />
                </Link>
                <Link href="#">
                  <FaTwitter className="w-20 h-16" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-3/4">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="Image"
              className="w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-4xl font-bold font-displayOne">
                Welcome to Summer Quest.
                <br />
                <small className="font-displayTwo text-sm">
                  Unleash Your Photographic Creativity!
                </small>
              </h1>
              <p className="text-lg font-displayTwo">
                Capture moments that last a lifetime, explore breathtaking
                landscapes, and master the art of photography. Join us on an
                immersive summer adventure where your creativity knows no
                bounds. Enroll now and embark on your transformative journey
                with Summer Quest: Where memories become masterpieces.
              </p>
              <h1 className="mt-10 text-2xl bold">
                You can now also follow us here!
              </h1>
              <div className="mt-4  flex justify-center gap-5 ">
                <Link href="#">
                  <FaFacebook className="w-20 h-16" />
                </Link>
                <Link href="#">
                  <FaInstagram className="w-20 h-16" />
                </Link>
                <Link href="#">
                  <FaTwitter className="w-20 h-16" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-3/4">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="Image"
              className="w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-4xl font-bold font-displayOne">
                Welcome to Summer Quest.
                <br />
                <small className="font-displayTwo text-sm">
                  Unleash Your Photographic Creativity!
                </small>
              </h1>
              <p className="text-lg font-displayTwo">
                Capture moments that last a lifetime, explore breathtaking
                landscapes, and master the art of photography. Join us on an
                immersive summer adventure where your creativity knows no
                bounds. Enroll now and embark on your transformative journey
                with Summer Quest: Where memories become masterpieces.
              </p>
              <h1 className="mt-10 text-2xl bold">
                You can now also follow us here!
              </h1>
              <div className="mt-4  flex justify-center gap-5 ">
                <Link href="#">
                  <FaFacebook className="w-20 h-16" />
                </Link>
                <Link href="#">
                  <FaInstagram className="w-20 h-16" />
                </Link>
                <Link href="#">
                  <FaTwitter className="w-20 h-16" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-3/4">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="Image"
              className="w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-4xl font-bold font-displayOne">
                Welcome to Summer Quest.
                <br />
                <small className="font-displayTwo text-sm">
                  Unleash Your Photographic Creativity!
                </small>
              </h1>
              <p className="text-lg font-displayTwo">
                Capture moments that last a lifetime, explore breathtaking
                landscapes, and master the art of photography. Join us on an
                immersive summer adventure where your creativity knows no
                bounds. Enroll now and embark on your transformative journey
                with Summer Quest: Where memories become masterpieces.
              </p>
              <h1 className="mt-10 text-2xl bold">
                You can now also follow us here!
              </h1>
              <div className="mt-4  flex justify-center gap-5 ">
                <Link href="#">
                  <FaFacebook className="w-20 h-16" />
                </Link>
                <Link href="#">
                  <FaInstagram className="w-20 h-16" />
                </Link>
                <Link href="#">
                  <FaTwitter className="w-20 h-16" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
