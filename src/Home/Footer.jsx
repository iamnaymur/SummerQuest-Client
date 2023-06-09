import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer footer-center p-10 primary-color text-black font-displayTwo"
      style={{}}
    >
      <div className="md:flex md:space-x-20">
        <div className="flex items-center  flex-col ">
          <div className="space-y-3">
            <p className="text-2xl bold font-displayOne">SummerQuest</p>

            <p className="font-bold">
              SummerQuest Industries Ltd. <br />
              Providing reliable resources and courses since 2021
            </p>
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="grid grid-flow-col gap-10 text-2xl mt-5">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
        <div>
          <div className="form-control w-80">
            <label className="label">
              <span>Enter your here for regular updates.</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="example@.com"
                className="input input-bordered w-full "
              />
              <button className="btn primary-button absolute top-0 right-0 rounded-l-none">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
