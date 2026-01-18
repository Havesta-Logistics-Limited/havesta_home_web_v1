import { useState } from "react";
import reviewsData from "../../../config/reviews.config.js";

const MobileReview = ({ type }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };
  
  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };
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
      className={`p-6 w-full flex flex-col justify-center items-center font-primary mb-16 lg:hidden min-h-[400px] ${backgroundColor} relative rounded-lg mx-auto max-w-md`}
    >
      <div className="text-center space-y-6 z-10">
        <img
          src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719784065/Shape_f1kllb.svg"
          className="w-12 h-12 mx-auto"
          alt="Quote"
        />
        
        <p className={`text-center text-sm md:text-base font-medium ${headingText} max-w-sm leading-relaxed min-h-[5rem] flex items-center justify-center`}>
          {reviewsData[currentIndex].text}
        </p>
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <img
            src={reviewsData[currentIndex].image}
            className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
            alt="Profile"
          />
          <div className="text-left">
            <h4 className={`font-semibold text-sm ${nameText}`}>{reviewsData[currentIndex].name}</h4>
            <h5 className={`text-xs font-medium ${roleText}`}>{reviewsData[currentIndex].role}</h5>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mt-6">
          <button 
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            onClick={prevReview}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            onClick={nextReview}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute top-2 right-2 opacity-20">
        <img
          src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1722198074/Group_1000002055_rfmxqn.svg"
          className="w-20 h-20"
          alt="Decoration"
        />
      </div>
    </div>
  );
};

export default MobileReview;
