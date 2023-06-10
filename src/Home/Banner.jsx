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
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-screen ">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <img
              src="https://i.ibb.co/vwFQYGS/1543483387-reinhart-julian-1145947-unsplash.jpg"
              alt="Image"
              className="w-full "
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
          <div className="relative h-screen w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <img
              src="https://i.ibb.co/NL7tsgt/what-is-unsplash.webp"
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
          <div className="relative h-screen w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <img
              src="https://i.ibb.co/7N9Z3Nw/benefits-of-photography.jpg"
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
          <div className="relative h-screen w-full ">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent object-contain to-black"></div>
            <img
              src="https://i.ibb.co/YXFJbBQ/shutterstock-93860383.jpg"
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
