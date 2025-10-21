import WebReview from "../../../../components/landing/Reviews-Fragment/WebReview.jsx";
import MobileReview from "../../../../components/landing/Reviews-Fragment/MobileReview.jsx";

export default function RiderReviewsChunk() {
  return (
    <div>
      <div className="font-primary grid grid-flow-row justify-items-center mt-28">
        <h2 className="text-3xl font-semibold">Riders Review</h2>
        <p className="text-gray-600 text-sm mt-4 text-center">
          We are proud of our accomplishments. We will keep <br /> delivering
          excellence and satisfaction
        </p>
        <div className="mt-4">
          <MobileReview type={"rider"} />
          <WebReview
            type={"rider"}
            image={
              "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721822928/Imager_k8hx5b.png"
            }
          />
        </div>
      </div>

      <div className="space-y-10 lg:space-y-0 grid grid-flow-col justify-items-center p-14 lg:w-1/2 mx-auto lg:space-x-4 mb-40 ">
        <div className=" ">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">1M+</h1>
          <h3 className="">Monthly Customer Visit</h3>
        </div>
        <div className="">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">92%</h1>
          <h3 className="">Customer Satisfaction Rate</h3>
        </div>
        <div className="">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">4.9</h1>
          <h3 className="">Average Customer Ratings</h3>
        </div>
      </div>
    </div>
  );
}
