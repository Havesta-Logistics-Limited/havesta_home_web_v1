import { IMG_UNSPLASH } from "../../../../assets/images";
import useHomeChooseUsChunk from "./useHomeChooseUsChunk";

const ChooseUs = () => {};

export default function HomeChooseUsChunk() {
  const h = useHomeChooseUsChunk();
  return (
    <div className="border-2 m-auto pt-24 max-w-5xl ">
      {/* UPPER PART */}
      <div className="text-white inter px-8  md:px-12 relative">
        <h1 className="font-bold text-2xl mb-4">Why Choose Havesta?</h1>
        <p className="max-w-lg font-light mb-5">
          At Havesta, we believe that everyone deserves access to the freshest
          farm produce, right at their doorstep. Our mission is to bridge the
          gap between local farmers and busy customers, ensuring that the
          highest quality fruits, vegetables, and other farm-fresh products are
          just a click away.
        </p>
        <div className=" w-fit px-3 py-2 bg-harvestaLightGreen rounded-sm mb-7 sm:mb-14">
          Read More
        </div>
        <img
          src={IMG_UNSPLASH}
          alt=""
          className="hidden lg:flex absolute -bottom-14 right-0 w-96"
        />
      </div>
      {/* LOWER PART */}
      <div className="bg-white flex flex-col justify-center gap-2 sm:grid sm:grid-cols-3 sm:py-8  ">
        {h.why.map((why) => (
          <div className="flex items-stretch   ">
            <p className="text-harvestaDarkGreen text-3xl border-r-2 border-r-harvestaDarkGreen w-40 flex justify-end items-center py-5 pr-2 sm:border-r-0  sm:py-0 sm:pr-0 font-bold">
              {why.icon}{" "}
            </p>
            <div className="flex flex-col justify-center pl-3 sm:pl-2">
              <h1 className="text-purpleblack font-bold">{why.title}</h1>
              <p className="text-[#4C4C4C] ">{why.content} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
