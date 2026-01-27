import { IMG_HAVESTALOGO } from "../assets/images";
const Logo = () => {
  return (
    <div className="flex items-center gap-0 font-semibold">
      <p className="inter text-white text-[18px] sm:text-lg lg:text-lg leading-none">
        Havesta
      </p>
      <img
        src={IMG_HAVESTALOGO}
        alt="havesta"
        className="w-6 sm:w-7 lg:w-8 -mt-1.5"
      />
    </div>
  );
};

export default Logo;
