import { lazy, Suspense } from "react";
import Loader from "../../common/Loader.jsx";

const Footer = lazy(() => import("../../common/Footer"));
const JoinUsSection = lazy(
  () => import("../../components/landing/new/JoinUsSection"),
);
// import Navbar from "../../components/MarketPlace/Navbar"
// import Section1 from "../../components/MarketPlace/Section1"
// import Section2 from "../../components/MarketPlace/Section2"

const MarketPlace = () => {
  return (
    <>
      <div className="font-primary">
        {/* <Navbar /> */}
        {/* <Section1 />
                <Section2 /> */}
        <Suspense fallback={<Loader />}>
          <JoinUsSection />
        </Suspense>
        <div className="relative flex justify-center h-fit w-full bg-marketSec1 bg-[#01BE724D]">
          <div className="flex flex-col md:flex-row bg-transparent mt-[10rem]">
            <div className="flex flex-col text-white text-center h-fit py-[50px] w-[500px] justify-center px-10 sm:mb-[10rem] mb-[3rem]">
              <h1 className="text-4xl font-bold mt-10 text-left text-black capitalize">
                Shop Faster With Havesta App
              </h1>
              <p className="my-5 text-sm text-left text-black ">
                Get fresh farm produce delivered in minutes from a variety of
                trusted vendors
              </p>
              <div className="flex gap-5">
                <div className="w-[150px]">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/App_Store_brjnhq.svg"
                    className="w-full object-fit  h-auto"
                    alt="App Store"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="w-[150px]">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/Play_Store_wq2cvo.svg"
                    className="w-full object-fit  h-auto"
                    alt="Google Play"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <img
                src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823766/Group_1002049_qumfck.png"
                className=" w-[400px]  h-auto object-contain rounded-lg "
                alt="Havesta app preview"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full p-[118px] justify-between items-center h-[157.17px]">
        <div className="flex p-[28.07px] w-[465.91px] gap-[21.05px]">
          <img
            className="w-[72.97px] h-[72.97px] object-contain"
            src="/images/svgexport-6 (2) 1.svg"
            alt="Best prices"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col h-full justify-between">
            <p className="text-[25.26px] leading-[31.83px] font-semibold">
              Best Prices & Deals
            </p>
            <p className="text-[22.45px] text-[#878787] leading-[28.29px] font-medium">
              Don’t miss our daily amazing deals and prices
            </p>
          </div>
        </div>
        <div className="flex p-[28.07px] w-[465.91px] gap-[21.05px]">
          <img
            className="w-[72.97px] h-[72.97px] object-contain"
            src="/images/svgexport-6 (3) 1.svg"
            alt="Refundable"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col h-full justify-between">
            <p className="text-[25.26px] leading-[31.83px] font-semibold">
              Refundable{" "}
            </p>
            <p className="text-[22.45px] text-[#878787] leading-[28.29px] font-medium">
              If your items are damaged, we will refund.
            </p>
          </div>
        </div>
        <div className="flex p-[28.07px] w-[465.91px] gap-[21.05px]">
          <img
            className="w-[72.97px] h-[72.97px] object-contain"
            src="/images/svgexport-7 (1) 2.svg"
            alt="Free delivery"
            loading="lazy"
            decoding="async"
          />
          <div className="flex flex-col h-full justify-between">
            <p className="text-[25.26px] leading-[31.83px] font-semibold">
              Free delivery
            </p>
            <p className="text-[22.45px] text-[#878787] leading-[28.29px] font-medium">
              Do purchase over ₦50k and get free delivery within Lagos
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default MarketPlace;
