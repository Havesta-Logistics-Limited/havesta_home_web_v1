import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect, useState } from "react";
import { reviewsByType } from "../../../config/reviews.config.js";

const WebReview = ({ type, image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const reviews = reviewsByType[type] || reviewsByType.customer;

  useEffect(() => {
    setImageLoading(true);
  }, [currentIndex, type]);

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
          className={`${background} flex items-center justify-center w-[85%] rounded-lg relative h-[350px] overflow-hidden`}
        >
          <div className="flex-shrink-0 w-[40%] h-full flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white/10">
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    <span className="text-xs">Loading image...</span>
                  </div>
                </div>
              )}
              <img
                src={reviews[currentIndex].image}
                className="w-full h-full object-contain rounded-lg"
                alt={reviews[currentIndex].role}
                loading="lazy"
                decoding="async"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
            </div>
          </div>

          <div className="flex-1 px-4 py-4 flex flex-col justify-center items-center space-y-4 max-w-md">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719784065/Shape_f1kllb.svg"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <p
              className={`text-center text-[16px] font-semibold ${textColor} flex items-center justify-center`}
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
