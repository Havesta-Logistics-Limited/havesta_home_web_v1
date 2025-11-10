import React from "react";
import SlidingNews from "../../../../common/sliding-news/SlidingNews";

export default function HomeLatestNewsChunk() {
  return (
    <div className=" bg-green-radial px-24 font-primary pb-36 py-10 ">
      <h1 className="text-white text-2xl md:text3xl lg:text-4xl font-bold pt-10 mb-4">
        Latest News
      </h1>
      <SlidingNews />
    </div>
  );
}
