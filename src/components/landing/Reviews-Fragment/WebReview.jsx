import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useState } from "react";

const WebReview = ({ type, image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews =
    type === "rider"
      ? [
          {
            text: "Delivering for Havesta has helped me earn a stable income. The app makes it easy to accept jobs, and customer addresses are always accurate. Support is quick to respond if I have any issues on the road.",
            name: "Samuel Ojo",
            role: "Rider",
            image:
              "https://img.freepik.com/free-photo/impatient-pizza-delivery-driver-poses-fast-motorbike_496169-2175.jpg?semt=ais_hybrid&w=740&q=80",
          },
          {
            text: "I appreciate the flexible hours. Sometimes traffic can be tough, but the incentives for on-time delivery really motivate me. I wish there were more bonuses during peak periods.",
            name: "Blessing Musa",
            role: "Rider",
            image:
              "https://img.freepik.com/premium-photo/serious-black-man-uniform-worker-food-delivery-service_274679-40373.jpg?w=360",
          },
          {
            text: "The training sessions helped me improve my delivery speed and customer service. I feel valued as part of the Havesta team.",
            name: "Chinedu Okeke",
            role: "Rider",
            image:
              "https://img.freepik.com/premium-photo/happy-african-delivery-cyclist-preparing-food-delivery-his-bicycle-residential-area_198115-4821.jpg",
          },
        ]
      : [
          {
            text: "As a vendor, Havesta has expanded my customer base beyond my local market. Payments are processed quickly, and I can track my sales in real time.",
            name: "Fatima Bello",
            role: "Produce Vendor",
            image:
              "https://t4.ftcdn.net/jpg/04/81/77/55/360_F_481775530_L6lvp3d8PZQuMBRRP6pEqiZFEyjKHUYh.jpg",
          },
          {
            text: "The platform makes it easy to list new products and update prices. I get regular feedback from customers, which helps me improve my offerings.",
            name: "Mrs Adeyemi",
            role: "Fish Vendor",
            image:
              "https://media.istockphoto.com/id/1149439045/photo/portrait-of-smiling-woman-selling-fish-at-market.jpg?s=612x612&w=0&k=20&c=-I9mK8ODrlQ9CAQMDK4Y-5XsIOuIPWtU0WHLWgpZqG4=",
          },
          {
            text: "Sometimes deliveries are delayed due to weather, but Havesta always keeps me informed. The rider network is reliable and professional.",
            name: "Ngozi Uche",
            role: "Grain Vendor",
            image:
              "https://media.istockphoto.com/id/1308053024/photo/portrait-of-a-smiling-woman-selling-onions-on-market.jpg?s=612x612&w=0&k=20&c=eHdjuzcUqk7KnhV9NdfVQTKbN4uSprEn2muzVfSRbdI=",
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
          className={`${background} flex items-center justify-center w-[85%] rounded-lg relative h-[350px] overflow-hidden`}
        >
          <div className="flex-shrink-0 w-[40%] h-full flex items-center justify-center p-4">
            <img
              src={reviews[currentIndex].image}
              className="w-full h-full object-contain rounded-lg"
              alt={reviews[currentIndex].role}
            />
          </div>

          <div className="flex-1 px-4 py-4 flex flex-col justify-center items-center space-y-4 max-w-md">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719784065/Shape_f1kllb.svg"
              alt=""
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
