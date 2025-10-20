import React from "react";
import useAboutStatsChunk from "./useAboutStatsChunk";

export default function AboutStatsChunk() {
  const h = useAboutStatsChunk();
  return (
    <div
      className="mt-16 grid grid-cols-1 justify-items-center md:grid-cols-4 border-t-2 "
      ref={h.ref}
    >
      {h.aboutStats.map((item, index) => {
        return (
          <div
            className="grid justify-items-center p-8  m-8  border-harvestaLightGreen"
            key={index}
          >
            <span className="grid justify-items-center">{item.icon}</span>{" "}
            {/* REFACTOR THIS SECTION */}
            <p className="text-lg font-bold  text-harvestaLightGreen font-primary lg:text-4xl my-2 ">
              {h.inView && (
                <CountUp end={item.amount} duration={item.duration} />
              )}
            </p>
            <p className="font-primary text-lg font-lighter mt-[-8px]">
              {item.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
