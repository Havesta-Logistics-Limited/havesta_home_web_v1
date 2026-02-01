import { NavLink } from "react-router-dom";
import { IMG_HAVESTALOGO } from "../assets/images";
import SocialIcons from "./social-icons/SocialIcons";

const ChevronRight = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-5 w-5 ${className}`}
    fill="currentColor"
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const Telegram = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-5 w-5 ${className}`}
    fill="currentColor"
  >
    <path d="M21.5 3.6L2.8 10.9c-1.2.5-1.2 2.2 0 2.6l4.5 1.6 1.8 5.8c.3.9 1.4 1.2 2.1.6l3.3-2.7 5.1 3.7c.8.6 1.9.1 2.1-.8l3.1-15c.3-1.1-.8-2.1-1.9-1.7zm-4.9 6.1l-7.5 6.4-.3 3.2-1.2-3.9 9-5.7z" />
  </svg>
);

const Phone = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-5 w-5 ${className}`}
    fill="currentColor"
  >
    <path d="M6.6 3.6c.5-.5 1.3-.5 1.8 0l2.2 2.2c.5.5.5 1.3 0 1.8l-1.5 1.5a13.6 13.6 0 006.3 6.3l1.5-1.5c.5-.5 1.3-.5 1.8 0l2.2 2.2c.5.5.5 1.3 0 1.8l-1.2 1.2c-1 1-2.5 1.4-3.8 1.1-6.2-1.4-11.1-6.3-12.5-12.5-.3-1.3.1-2.8 1.1-3.8l1.1-1.1z" />
  </svg>
);

const Mail = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-5 w-5 ${className}`}
    fill="currentColor"
  >
    <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm0 2l8 5 8-5H4z" />
  </svg>
);
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 bg-black p-8 lg:p-24 lg:px-16 text-gray-400 font-body relative">
      <div className=" p-4">
        <div className=" mb-4">
          <div className=" relative  font-bold  text-xl py-2 text-white  w-fit">
            <div className=" relative flex ">
              <p className="inter">Havesta</p>
              <img
                src={IMG_HAVESTALOGO}
                alt="havesta"
                className="w-6 -mt-2  "
              />
            </div>
          </div>
        </div>
        <p className="text-sm leading-6">
          HAVESTA prioritizes convenience and transparency, enhancing the
          overall shopping experience. Our product also offers real-time order
          tracking, secure payment options, and eco-friendly delivery choices,
          aligning with the values of today&apos;s environmentally conscious
          consumers.
        </p>
      </div>

      <div className=" p-6  px-4 lg:px-1">
        <h3 className="text-xl font-semibold text-white mb-4 ">
          Featured Links
        </h3>
        <ul className="text-sm leading-6 space-y-2 lg:grid grid-cols-2">
          <li className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-2">Home</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/about" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-2">About</span>
            </NavLink>
          </li>

          <li className="flex items-center">
            <NavLink to="/news" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-2">News</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/contact" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-2">Contact</span>
            </NavLink>
          </li>

          <li className="flex items-center">
            <NavLink to="/vendors" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-2">Vendors</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/riders" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-2">Riders</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/careers" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-2">Careers</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/landing" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-2">Marketplace</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/terms-of-use" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-2">Terms of use</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/privacy-policy" className="flex items-center">
              <ChevronRight className="text-harvestaLightGreen" />
              <span className="ml-1">Privacy Policy</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className=" p-4">
        <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
        <div className="text-sm space-y-4">
          <div className="flex items-start gap-2">
            <Telegram className="text-harvestaLightGreen" />
            <p>17 Kaffi Street, Behind ICM, Alausa, Ikeja, Lagos State.</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-harvestaLightGreen" />
            <span>08109511825</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-harvestaLightGreen" />
            <span>hello@havesta.com</span>
          </div>
        </div>
      </div>

      <div className=" p-4">
        <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
        <span className="flex pt-8">
          <input
            type="text"
            placeholder="Enter email address"
            className="text-xs p-2 font-light w-48 rounded-l focus:outline-none"
          />
          <span className="bg-harvestaLightGreen p-2 text-white rounded-r">
            <Telegram className="h-6 w-6 text-white" />
          </span>
        </span>
        <SocialIcons color="white" />
      </div>
      <div className="w-full h-auto bg-dim absolute bottom-0 left-0 text-xs text-center align-middle p-2 text-white  border-t-[0.5px] border-gray-900">
        <span>
          © 2026 Havesta{". "}
          <span className=""> All Rights Reserved</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
