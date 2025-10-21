import React from "react";

export default function VendorHeroChunk() {
  return (
    <div className="relative pb-5 ">
      <div className="w-full bg-cover h-[30%] py-20 bg-[url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823045/Group_1000002049_bjs7ez.png')]">
        {/* HERO SECTION */}
        <div className="mt-32 md:grid grid-cols-2 justify-items-center lg:h-[40vh] relative lg:ml-44 ">
          <div className=" p-2">
            <h2 className="p-3 text-[45px] font-primary font-bold lg:leading-tight lg:text-[55px] text-white text-6xl ">
              Make More Sales <br />
              <span className="text-primary font-[700]">Online </span>with
              Havesta
            </h2>
            <p className=" p-3  text-md text-white">
              Let us help you take your business to the next level
            </p>
            {/*  <button className="mb-10 font-primary rounded-full bg-white p-3 text-black text-xs font-bold shadow-md w-[100px] ml-2 hover:bg-primary hover:text-white transition-all">
                    Get Started
                  </button> */}
          </div>
          <div className="lg:absolute right-52">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719527040/Ellipse_69_2_n4dk4u.svg"
              alt=""
              className="w-[400px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
