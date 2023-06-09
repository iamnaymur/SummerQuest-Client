import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-286px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
