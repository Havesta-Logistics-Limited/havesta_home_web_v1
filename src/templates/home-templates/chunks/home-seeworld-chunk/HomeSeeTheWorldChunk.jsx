import React from "react";
import { IMG_SEEWORLD } from "../../../../assets/images";

export default function HomeSeeTheWorldChunk() {
  return (
    <div className="mt-4  flex flex-col justify-center gap-4 pb-12 sm:flex-row sm:items-center  m-auto max-w-4xl px-4 mb-6 md:gap-6">
      <div className="m-auto max-w-sm sm:max-w-[19rem]  md:max-w-[22rem]">
        <img src={IMG_SEEWORLD} alt="" />
      </div>
      <div className=" w-full">
        <h1 className="text-white font-bold text-2xl text-center mb-3 sm:text-left md:text-3xl  ">
          See the world & spend less always.
        </h1>
        <p className="text-center text-[#DEDEDE] text-sm max-w-md m-auto  sm:text-left md:text-base sm:m-0">
          Create custom landing pages with Omega that converts more visitors
          than any website. With lots of unique blocks, you can easily build a
          page without coding.
        </p>
      </div>
    </div>
  );
}
