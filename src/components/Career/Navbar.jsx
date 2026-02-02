import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="fixed flex justify-center items-center bg-white z-50 w-full h-[72px] lg:w-full lg:h-[112px] lg:shadow-navbar">
        <div className="flex w-[327px] justify-between items-center lg:w-5/6 h-full">
          <img
            className="w-[91px] object-contain lg:w-[138.3px]"
            src="/images/harvestaLogo.webp"
            alt=""
          />
          <img
            className="w-[24px] object-contain lg:hidden"
            src="/images/Group 3821.webp"
            alt=""
          />
          <div className="hidden gap-16 justify-between h-max lg:flex">
            <NavLink to={"/about"} className="h-max">
              About us
            </NavLink>
            <NavLink to={""} className="h-max">
              Careers{" "}
              <span className="px-[5px] py-[2px] text-white rounded-3px bg-[#01BE72]">
                We are Hiring!
              </span>
            </NavLink>
            <NavLink to={"/contact"} className="h-max">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
