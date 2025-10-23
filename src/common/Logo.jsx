import { IMG_HAVESTALOGO } from "../assets/images";
const Logo = () => {
  return (
    <div className="flex items-center relative  font-bold text-lg border-2 px-3 py-2 border-harvestaLightGreen bg-white text-harvestaBlack rounded-3xl w-fit">
      <div className=" relative flex items-center ml-2">
        <p className="inter">Havesta</p>
        <img src={IMG_HAVESTALOGO} alt="havesta" className="w-6 -mt-2  " />
      </div>
    </div>
  );
};

export default Logo;
