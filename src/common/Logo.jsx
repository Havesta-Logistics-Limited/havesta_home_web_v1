import { IMG_HAVESTALOGO } from "../assets/images";
const Logo = () => {
  return (
    <div className="flex items-center font-bold">
      <p className="inter text-white text-base sm:text-lg lg:text-xl">Havesta</p>
      <img src={IMG_HAVESTALOGO} alt="havesta" className="w-5 sm:w-6 lg:w-7 -mt-2" />
    </div>
  );
};

export default Logo;
