import { useEffect, useState } from "react";
import { reviewsByType } from "../../../config/reviews.config.js";

const MobileReview = ({ type }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const reviewsData = reviewsByType[type] || reviewsByType.customer;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length,
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
    setImageLoading(true);
  }, [type]);

  useEffect(() => {
    setImageLoading(true);
  }, [currentIndex]);
  const backgroundColor =
    type === "customer" || type === "rider"
      ? "bg-harvestaYellow"
      : "bg-harvestaDarkGreen";
  const headingText =
    type === "customer" || type === "rider" ? "text-black" : "text-white";
  const nameText = type === "vendor" ? "text-white" : "text-black";
  const roleText = type === "vendor" ? "text-harvestaYellow" : "text-white";

  return (
    <div
      className={`w-full flex flex-col justify-center items-center font-primary mb-16 lg:hidden ${backgroundColor} relative rounded-lg mx-auto max-w-md px-4 py-6 sm:p-6 min-h-[360px] sm:min-h-[400px]`}
    >
      <div className="text-center space-y-5 sm:space-y-6 z-10 w-full">
        <img
          src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719784065/Shape_f1kllb.svg"
          className="w-12 h-12 mx-auto"
          alt="Quote"
          loading="lazy"
          decoding="async"
        />

        <p
          className={`text-center text-sm md:text-base font-medium ${headingText} max-w-sm leading-relaxed mx-auto min-h-[96px] sm:min-h-[110px] px-1`}
        >
          {reviewsData[currentIndex].text}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="relative w-16 h-16">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/20">
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/50 border-t-white" />
              </div>
            )}
            <img
              src={reviewsData[currentIndex].image}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
              alt="Profile"
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
            />
          </div>
          <div className="text-center sm:text-left">
            <h4 className={`font-semibold text-sm ${nameText}`}>
              {reviewsData[currentIndex].name}
            </h4>
            <h5 className={`text-xs font-medium ${roleText}`}>
              {reviewsData[currentIndex].role}
            </h5>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4 sm:mt-6">
          <button
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            onClick={prevReview}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            onClick={nextReview}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute top-2 right-2 opacity-20">
        <img
          src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1722198074/Group_1000002055_rfmxqn.svg"
          className="w-20 h-20"
          alt="Decoration"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default MobileReview;
