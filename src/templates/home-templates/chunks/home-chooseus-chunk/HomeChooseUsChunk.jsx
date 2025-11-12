import { Link } from "react-router-dom";
import { IMG_UNSPLASH } from "../../../../assets/images";
import useHomeChooseUsChunk from "./useHomeChooseUsChunk";

const ChooseUs = () => {};

export default function HomeChooseUsChunk() {
  const h = useHomeChooseUsChunk();
  return (
    <div className=" bg-green-radial px-6">
      <div className="border-2 m-auto pt-16 md:pt-24 max-w-6xl bg-white/10 backdrop-blur-md  border-white/20 rounded-md shadow-lg  ">
        {/* UPPER PART */}
        <div className="text-white inter px-8  md:px-12 relative  ">
          <h1 className="font-bold text-2xl mb-4">Why Choose Havesta?</h1>
          <p className="max-w-lg font-light mb-5">
            At Havesta, we believe that everyone deserves access to the freshest
            farm produce, right at their doorstep. Our mission is to bridge the
            gap between local farmers and busy customers, ensuring that the
            highest quality fruits, vegetables, and other farm-fresh products
            are just a click away.
          </p>
          <Link to={"/about"}>
            <div className=" w-fit px-3 py-2 bg-harvestaLightGreen rounded-sm mb-7 sm:mb-14">
              Read More
            </div>
          </Link>
          <img
            src={IMG_UNSPLASH}
            alt=""
            className="hidden lg:flex absolute -bottom-14 right-0 w-96"
          />
        </div>
        {/* LOWER PART */}
        <div className="bg-white flex flex-col justify-center gap-2 sm:grid sm:grid-cols-3 sm:py-8   ">
          {h.why.map((why) => (
            <div className="flex items-stretch gap-1" key={why.title} >
              <p className="text-harvestaDarkGreen text-3xl  w-[30%] flex justify-end items-center mt-4 sm:mt-0 pr-2  sm:py-0 sm:pr-0 font-bold  h-full">
                {why.icon}{" "}
              </p>
              <div className="flex flex-col justify-center w-[70%] pl-3 sm:pl-2 border-l-2 border-l-harvestaDarkGreen sm:border-l-0 ">
                <h1 className="text-purpleblack font-bold">{why.title}</h1>
                <p className="text-[#4C4C4C] text-sm ">{why.content} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
