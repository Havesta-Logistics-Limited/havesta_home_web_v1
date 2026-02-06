import { Swiper, SwiperSlide } from "swiper/react";

export default function SlidingNewsSkeleton() {
  return (
    <Swiper
      grabCursor={false}
      effect={"slide"}
      centeredSlides={true}
      autoplay={false}
      speed={0}
      spaceBetween={50}
      pagination={{ clickable: false }}
      loop={false}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
          effect: "slide",
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          effect: "slide",
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
          effect: "slide",
        },
      }}
    >
      {[...Array(3)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-200 rounded-xl overflow-hidden my-8 min-h-[480px] h-[480px] flex flex-col animate-pulse">
            <div className="w-full h-56 bg-gray-300"></div>
            <div className="flex-1 flex flex-col justify-center p-8">
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
