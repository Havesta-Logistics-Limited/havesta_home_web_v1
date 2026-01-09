import {
  IMG_LEAFLEFT,
  IMG_LEAFRIGHT,
  IMG_LEAFTOP,
  IMG_PEOPLE,
} from "../../../../assets/images";
import useHomeHeroChunk from "./useHomeHeroChunk";

export default function HomeHeroChunk() {
  const h = useHomeHeroChunk();
  return (
    <>
      <div
        className={
          "relative w-full min-h-screen bg-cover px-6 md:px-10 pt-[calc(var(--nav-h,104px)+1rem)] md:pt-[calc(var(--nav-h,104px)+1.5rem)] flex items-center md:items-center"
        }
      >
        <div className="w-full max-w-6xl mx-auto flex-1 flex items-center md:items-center">
          <div className="text-white w-full max-w-xl md:max-w-2xl mx-auto lg:mx-0 lg:ml-52 mt-0 translate-y-6 md:translate-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[70px] font-bold inter w-fit relative">
              Find Your Healthy
              <img
                src={IMG_LEAFTOP}
                alt=""
                className="hidden lg:flex absolute -top-12 -right-12"
              />
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[70px] text-harvestaYellow font-bold">
              Groceries
            </h2>
            <br />
            <p className="text-base md:text-lg">
              Fresh fruits & veggies, grains, Tubers and More!
            </p>

            <div className="mt-9 flex flex-wrap gap-4 items-center">
              <img src={IMG_PEOPLE} alt="" className="w-32 md:w-36 " />
              <div className="urbanist flex flex-col">
                <h1 className="font-bold text-base md:text-lg">1000+</h1>
                <p className="font-light text-base md:text-lg">Customers</p>
              </div>
              <div className="relative z-20 sm:ml-5">
                <div className="bg-harvestaYellow text-harvestaBlack flex items-center justify-center py-3 px-6 rounded-3xl font-bold z-50">
                  Learn more
                </div>
                <div className="bg-harvestaDarkGreen text-harvestaDarkGreen flex items-center justify-center py-3 px-6 rounded-3xl font-bold absolute top-1 -z-10 left-1  w-full ">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 ">
          <img
            src={h.heroImage}
            alt=""
            className="hidden lg:block lg:w-[480px] w-[200px]"
          />
        </div>
        <img
          src={IMG_LEAFRIGHT}
          alt=""
          className="absolute hidden lg:block  right-48 w-56 top-96"
        />
        <img
          src={IMG_LEAFLEFT}
          alt=""
          className=" hidden lg:flex absolute top-64 left-0"
        />
      </div>
    </>
  );
}
