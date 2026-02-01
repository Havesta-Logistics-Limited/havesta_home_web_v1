import phoneMockup from "../../../../../public/images/Mockup.webp";
import phoneMockupMobile from "../../../../../public/images/Mockup-mobile.webp";

export default function DownloadApp(backgroundColor) {
  return (
    <div
      className="px-4 sm:px-8 lg:px-16 "
      style={{ backgroundColor: backgroundColor || "#ffffff" }}
    >
      <section className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-2 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-primary text-white mb-6 text-left">
            Download Our App
          </h2>
          <p className="text-sm sm:text-base text-[#DEDEDE] max-w-md lg:max-w-lg mb-6">
            Get fresh farm produce delivered in minutes from a variety of
            trusted vendors offering fruits, veggies, tubers, grains, and nuts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/App_Store_brjnhq.svg"
              alt="Download on App Store"
              className="w-36 sm:w-40 lg:w-44 hover:scale-105 transition-transform duration-200"
            />
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/Play_Store_wq2cvo.svg"
              alt="Get it on Google Play"
              className="w-36 sm:w-40 lg:w-44 hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>

        <div className="lg:hidden block">
          <img
            src={phoneMockupMobile}
            alt="Havesta mobile app preview"
            className="w-[50%] max-w-xs mx-auto mt-10"
            loading="lazy"
            decoding="async"
            width="320"
            height="630"
          />
        </div>

        <div className="hidden lg:block">
          <img
            src={phoneMockup}
            alt="Havesta mobile app preview"
            className="w-full max-w-sm xl:max-w-md mx-auto"
            loading="lazy"
            decoding="async"
            width="300"
            height="600"
          />
        </div>
      </section>
    </div>
  );
}
