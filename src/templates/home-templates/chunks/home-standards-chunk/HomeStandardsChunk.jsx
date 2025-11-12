import React from "react";
import useHomeStandardsChunk from "./useHomeStandardsChunk";

export default function HomeStandardsChunk() {
  const h = useHomeStandardsChunk();
  return (
    <div className="inter bg-green-radial flex justify-center px-2 py-24">
      <div className="bg-white/10 backdrop-blur-md  border-white/20 rounded-md shadow-lg border w-[90%]  sm:w-[85%] flex justify-center py-8 px-3 sm:px-6  lg:w-[80%] ">
        <div className="bg-primary text-center w-fit p-8 py-12 lg:pb-24 relative">
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-4 ">
            Our Standout Progress
          </h1>
          <p className="text-[#DEDEDE] text-sm md:text-base">
            A good idiom for kids is "It's raining cats and dogs." Kids know
            what both cats and dogs are from an early age.
          </p>

          <div className=" mt-6 gap-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2 top-36 grid md:grid-cols-2 w-full lg:grid-cols-4 lg:gap-3 lg:px-4 text-left">
            {h.standards.map((standard) => (
              <div
                key={standard.title}
                className={`${standard.color} p-4 rounded-sm`}
              >
                <h1 className="text-primary text-sm mb-5 font-bold">
                  {standard.title}{" "}
                </h1>
                <p className="text-purpleblack  text-2xl mb-3">
                  {standard.number}{" "}
                </p>
                <p className="text-[#4B5563] text-sm ">{standard.content} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
