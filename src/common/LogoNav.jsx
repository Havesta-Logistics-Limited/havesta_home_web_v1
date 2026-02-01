import { Link } from "react-router-dom";
import Logo from "./Logo";
const LogoNav = () => {
  return (
    <div className="absolute z-10 w-full">
      <div className="ml-10 flex flex-row items-center justify-start text-white mt-8 font-primary lg:ml-60">
        <Link
          to={"/"}
          className="flex flex-row items-center"
          aria-label="Havesta home"
        >
          <Logo />
        </Link>
      </div>
    </div>
  );
};

export default LogoNav;
