import React from "react";
import useVendorOverflowChunk from "./useVendorOverflowChunk";

export default function VendorOverflowChunk() {
  const h = useVendorOverflowChunk();
  return (
    <div className="w-full h-auto bg-harvestaLightGreen px-3 flex justify-center mt-20">
      {" "}
      {/* container */}
      <div className="w-3/4 bg-white lg:grid grid-flow-col gap-3  rounded-[20px]">
        {h.vendorStats.map((item, index) => (
          <div
            key={index}
            className="grid grid-flow-col items-center font-primary text-[13px] gap-2 p-6 w-[300px] font-semibold "
          >
            <img src={item.image} alt="icon" className="w-10" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
