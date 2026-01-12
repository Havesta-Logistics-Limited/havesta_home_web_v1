import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import useSlidingNews from "./useSlidingNews";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SlidingNews() {
  const h = useSlidingNews();
  return (
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
          spaceBetween: 30,
          effect: "slide",
        },
        // Medium screens
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          effect: "slide",
        },
        // Small screens
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
          effect: "slide",
        },
      }}
    >
      {h.news.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-primary rounded-xl border-primary overflow-hidden hover:bg-harvestaLightGreen hover:border-primary text-white my-8 min-h-[480px] h-[480px] flex flex-col transition-all hover:shadow-lg">
            <img src={item.img} alt="" className="w-full h-56 object-cover" />
            <div className="flex-1 flex flex-col justify-center p-8">
              <span className="font-bold text-lg md:text-xl flex justify-center align-center p-4 font-primary text-center">
                {item.des}
              </span>
              <span className="block text-sm  font-extralight text-center">
                {item.paragraph}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
