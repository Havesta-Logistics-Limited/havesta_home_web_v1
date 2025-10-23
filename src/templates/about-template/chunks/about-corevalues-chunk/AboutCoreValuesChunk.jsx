import { Swiper, SwiperSlide } from "swiper/react";
import useAboutCoreValuesChunk from "./useAboutCoreValuesChunk";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function AboutCoreValuesChunk() {
  const h = useAboutCoreValuesChunk();
  return (
    <div className="my-14  mb-0 lg:p-24 ">
      <h3 className="flex justify-center font-bold text-4xl mb-14">
        Our Core Values
      </h3>
      <Swiper
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
              border-primary overflow-hidden hover:bg-harvestaLightGreen hover:border-primary text-white my-10 h-[480px]
              transition-all hover:shadow-lg"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="m-10">
                <span className="font-bold text-[18px] flex justify-center align-center p-3 font-primary">
                  {item.title}
                </span>
                <span className="block text-md font-primary">
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
