import { IMG_PEOPLE } from "../../../../assets/images";
import useHomeHeroChunk from "./useHomeHeroChunk";

export default function HomeHeroChunk() {
  const h = useHomeHeroChunk();
  return (
    <>
      <div className={`relative w-full h-[593px] bg-cover p-4  mb-20 `}>
        <div className="">
          <div className=" text-white lg:ml-52 lg:mt-48 mt-32">
            <h2 className=" text-6xl lg:text-[70px] font-bold inter">
              Find Your Healthy
            </h2>
            <h2 className="text-6xl lg:text-[70px] text-harvestaYellow font-bold">
              Groceries
            </h2>
            <br />
            <p className="text-lg">
              Fresh fruits & veggies, grains, Tubers and More!
            </p>
            <div className="mt-9 flex  gap-6 items-center">
              <img src={IMG_PEOPLE} alt="" className="w-36" />
              <div className="urbanist flex flex-col">
                <h1 className="font-bold text-lg">1000+</h1>
                <p className="font-light">Customers</p>
              </div>
              <div className="relative  z-50 ml-6">
                <div className="bg-harvestaYellow text-harvestaBlack flex items-center justify-center py-3 px-6 rounded-3xl font-bold z-50">
                  Learn more
                </div>
                <div className="bg-harvestaDarkGreen text-harvestaDarkGreen flex items-center justify-center py-3 px-6 rounded-3xl font-bold absolute top-1 -z-10 left-1  w-full">
                  Learn more
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <img
              src={h.heroImage}
              alt=""
              className="hidden lg:block lg:w-[550px] w-[200px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
