import React from "react";
import useAboutStatsChunk from "./useAboutStatsChunk";

export default function AboutStatsChunk() {
  const h = useAboutStatsChunk();
  return (
    <div className=" bg-harvestaDarkGreen flex justify-center items-center font-primary py-8 ">
      <div className=" grid grid-cols-1 justify-items-center md:grid-cols-4 gap-4 text-white ">
        {h.aboutStats.map((item, index) => {
          return (
            <div
              className="flex flex-col gap-2 p-3 border-l-2 border-l-harvestaLightGreen  w-40"
              key={index}
            >
              <h1 className="  text-3xl">{item.amount}</h1>
              <p className="text-sm ">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
