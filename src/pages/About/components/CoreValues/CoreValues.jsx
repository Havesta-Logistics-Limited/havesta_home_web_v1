import { Swiper, SwiperSlide } from "swiper/react";
import useCoreValues from "./useCoreValues";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import SkeletonImage from "../../../../common/SkeletonImage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function CoreValues({ variant = "dark" }) {
  const h = useCoreValues();
  const titleColor = variant === "light" ? "text-gray-900" : "text-white";

  return (
    <div className="m-3  mb-0 lg:p-24 ">
      <h3 className={`flex justify-center font-bold text-4xl ${titleColor}`}>
        Our Core Values
      </h3>
      <Swiper
        style={{
          "--swiper-pagination-color": "#FFC141",
          "--swiper-pagination-bullet-inactive-color": "#FFC141",
          "--swiper-pagination-bullet-inactive-opacity": "0.35",
        }}
        grabCursor={true}
        effect={"slide"}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: false,
          delay: 0,
        }}
        speed={5000}
        spaceBetween={50}
        pagination={{ clickable: true }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          // Large screens
          1024: {
            slidesPerView: 3,
            effect: "slide",
          },
          // Smaller screens
          0: {
            slidesPerView: 1,
            effect: "slide",
          },
        }}
      >
        {h.coreValues.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-primary rounded-xl
              border-primary overflow-hidden hover:bg-green-700 hover:border-primary text-white my-10 h-[480px]
              transition-all hover:shadow-lg border-[1px] border-yellow-500/30"
            >
              <SkeletonImage
                src={item.img}
                alt=""
                className="w-full h-40 sm:h-48"
                imgClassName="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <span className="font-bold text-[18px] flex justify-center align-center p-3 font-primary">
                  {item.title}
                </span>
                <span className="block text-md font-extralight text-center">
                  {item.paragraph}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
