import useFaQ from "./useFaQ";
import FaqMain from "./faq-main/FaqMain";

export default function Faq() {
  useFaQ();
  return (
    <div className="font-primary bg-green-radial py-16 sm:py-20">
      {/* FAQ Section */}
      <div className="flex justify-center px-4">
        <FaqMain />
      </div>

      {/* Get Your App Section */}
      <div className="px-4 sm:px-8 py-16 mt-10">
        <section className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-primary text-white mb-4">
              Get Your App
            </h2>
            <p className="text-sm sm:text-[15px] text-center lg:text-left text-[#DEDEDE] max-w-md mx-auto lg:mx-0">
              Get fresh farm produce delivered in minutes from a variety of
              trusted vendors offering fruits, veggies, tubers, grains, and
              nuts.
            </p>
            <div className="flex justify-center lg:justify-start gap-3 mt-6">
              <img
                src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/App_Store_brjnhq.svg"
                alt="App Store"
                className="w-32 sm:w-40"
              />
              <img
                src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/Play_Store_wq2cvo.svg"
                alt="Play Store"
                className="w-32 sm:w-40"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823608/Group_1000001793_qvhqd7.png"
              alt="App Preview"
              className="w-full max-w-lg lg:max-w-xl"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
