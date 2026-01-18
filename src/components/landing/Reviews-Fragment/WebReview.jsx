import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useState } from "react";

const WebReview = ({ type, image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      text: "Shopping for groceries has never been easier! Hervesta offers an incredible selection of fresh produce delivered right to my doorstep.",
      name: "Adekanbi Adeoluwa",
      role: "Iyaola Farms",
    },
    {
      text: "Amazing service and quality products! The delivery is always on time and the produce is incredibly fresh.",
      name: "Sarah Johnson",
      role: "Butcher",
    },
    {
      text: "I've been using Hervesta for months now and I'm consistently impressed with their service and product quality.",
      name: "Michael Olawale",
      role: " Fish Vendor",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const background =
    type === "rider" ? "bg-harvestaYellow" : "bg-harvestaDarkGreen";
  const textColor = type === "rider" ? "text-white" : "text-white";
  const textTag = type === "rider" ? "text-primary" : "text-harvestaYellow";

  return (
    <>
      <div className="hidden p-4 w-full lg:flex justify-center items-center font-primary mb-16">
        <ArrowCircleLeftIcon
          fontSize="large"
          sx={{
            color: "#005231",
            cursor: "pointer",
          }}
          className="mr-4"
          onClick={prevReview}
        />

        <div
          className={`${background} grid grid-flow-col place-content-center items-center w-[55%] rounded-lg relative`}
        >
          <div>
            <img src={image} className="w-[70%]  ml-3 my-3" alt="" />
          </div>

          <div className="  mr-10 grid grid-flow-row justify-items-center items-center space-y-8">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719784065/Shape_f1kllb.svg"
              alt=""
            />{" "}
            {/* Quote icon */}
            <p
              className={`text-center text-[16px] font-semibold ${textColor} min-h-[4rem] flex items-center`}
            >
              {reviews[currentIndex].text}
            </p>
            <div>
              <h6
                className={`text-[14px] font-semibold text-center ${textTag}`}
              >
                {reviews[currentIndex].name}
              </h6>
              <h6
                className={`text-[12px] text-center italic font-light ${textTag}`}
              >
                {reviews[currentIndex].role}
              </h6>
            </div>
          </div>
        </div>

        <ArrowCircleRightIcon
          fontSize="large"
          sx={{
            color: "#005231",
            cursor: "pointer",
          }}
          className="ml-4"
          onClick={nextReview}
        />
      </div>
    </>
  );
};

export default WebReview;
