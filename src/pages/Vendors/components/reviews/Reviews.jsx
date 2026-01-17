import MobileReview from "../../../../components/landing/Reviews-Fragment/MobileReview.jsx";
import WebReview from "../../../../components/landing/Reviews-Fragment/WebReview.jsx";

export default function Reviews() {
  return (
    <div>
      <div className="font-primary p-0 grid grid-flow-row justify-items-center">
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
    </div>
  );
}
