import { Link } from "react-router-dom";
import navRoutes from "../../routes/navRoutes.jsx";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
import Logo from "../Logo.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import { openModal } from "../../redux/features/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function NavbarTemplate() {
  const { icon } = useSelector((state) => state.iconReducer);
  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div className=" py-3  mt-5 px-12 md:px-3  absolute text-harvestaBlack z-10 w-full font-primary ">
      <div className="grid grid-flow-col  items-center max-w-4xl m-auto  relative ">
        <Link to={"/"} className="">
          {" "}
          {/* Logo */}
          <Logo />
        </Link>

        <div className="hidden md:flex flex-row gap-5 relative border-harvestaLightGreen  bg-white px-4  border-2 rounded-3xl w-fit ml">
          {" "}
          {/* Routes */}
          {navRoutes.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center  p-2 rounded-md hover:bg-harvestaLightGreen hover:p-2 transition-all"
            >
              <Link
                to={item.path}
                className="text-sm text-harvestaBlack"
                onMouseEnter={() => setDropdownOpen(false)}
                onClick={item.openNav ? toggleDropdown : null}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <button
                  onClick={toggleDropdown}
                  className="ml-1 focus:outline-none text-white"
                >
                  {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
              {item.submenu && dropdownOpen && (
                <div className="absolute top-0 mt-10 w-40 bg-white shadow-lg transition-all grid grid-cols-1 justify-items-center">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className=" w-full p-2 mx-auto flex justify-center text-sm text-gray-700 hover:bg-harvestaLightGreen hover:text-white transition-all "
                      onClick={() => setDropdownOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-2 hidden md:block px-4 py-2 border-harvestaLightGreen bg-white rounded-3xl cursor-pointer w-fit ml-4 text-sm">
          <Link>Marketplace</Link>
        </div>

        <div className="absolute right-0 text-xl md:hidden">
          <MenuIcon
            onClick={() => dispatch(openModal())}
            className={
              icon === "home"
                ? "text-harvestaYellow"
                : "text-harvestaLightGreen"
            }
            sx={{
              fontSize: "40px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
