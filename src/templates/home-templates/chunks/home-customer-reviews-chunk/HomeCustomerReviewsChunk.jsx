import React from "react";
import useHomeCustomerReviewsChunk from "./useHomeCustomerReviewsChunk";
import { GoTriangleDown } from "react-icons/go";
import { FaQuoteLeft } from "react-icons/fa";
export default function HomeCustomerReviewsChunk() {
  const h = useHomeCustomerReviewsChunk();
  return (
    <div className="inter bg-green-radial font-primary px-6 py-14 pt-32">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold  text-center">
        Customer Reviews
      </h1>
      <p className="text-white text-center font-light max-w-sm m-auto text-sm lg:text-base">
        We are proud of our accomplishments. We will keep delivering excellence
        and satisfaction
      </p>
      <div className="flex flex-wrap bg-[#F3F4F6] justify-center px-4 py-6 sm:py-12 gap-3 mt-5 md:gap-4 lg:grid lg:grid-cols-3 max-w-5xl m-auto  ">
        {h.reviews.map((rev) => (
          <div
            key={rev.name}
            className="flex flex-col justify-center items-center text-center"
          >
            <div
              className={`bg-${rev.color} text-center p-4 py-10 sm:py-12 mb-4 sm:p-6  relative`}
            >
              <p className=" flex justify-center text-2xl text-primary mb-4 ">
                <FaQuoteLeft />
              </p>
              <p className={`${rev.textColor} text-sm max-w-[300px]`}>
                {rev.review}{" "}
              </p>
              <div
                className={`text-${rev.color}  w-fit absolute text-3xl -bottom-[19px] left-1/2 transform -translate-x-1/2`}
              >
                <GoTriangleDown />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-sm ">
              <img src={rev.img} alt="" className="w-12" />
              <p className="font-bold text-purpleblack">{rev.name} </p>
              <p>{rev.role} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
