import MobileReview from "../../../../components/landing/Reviews-Fragment/MobileReview.jsx";
import WebReview from "../../../../components/landing/Reviews-Fragment/WebReview.jsx";

export default function VendorReviewsChunk() {
  return (
    <div>
      <div className="font-primary p-0 grid grid-flow-row justify-items-center mt-28">
        <h2 className="text-3xl font-semibold">Vendor Reviews</h2>
        <p className="text-gray-600 text-sm mt-4 text-center">
          We are proud of our accomplishments. We will keep <br /> delivering
          excellence and satisfaction
        </p>

        <div className="mt-4">
          <MobileReview type={"vendor"} />
          <WebReview
            type={"vendor"}
            image={
              "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823042/Imagev_zvxpgl.png"
            }
          />
        </div>
      </div>
      <div className="space-y-10 lg:grid grid-cols-3 justify-items-center p-14 lg:w-1/2 mx-auto lg:space-x-4 mb-40">
        <div className="items-center flex flex-col">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">1M+</h1>
          <h3 className="">Monthly Customer Visit</h3>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">92%</h1>
          <h3 className="">Customer Satisfaction Rate</h3>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">4.9</h1>
          <h3 className="">Average Customer Ratings</h3>
        </div>
      </div>
    </div>
  );
}
