import { Pagination, Autoplay, Navigation } from "swiper/modules";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Swiper, SwiperSlide } from "swiper/react";
import useAboutMeetTeamChunk from "./useAboutMeetTeamChunk";

export default function AboutMeetTeamChunk() {
  const h = useAboutMeetTeamChunk();
  return (
    <div className="p-8 font-primary">
      <div className="grid grid-cols-1 justify-items-center">
        <h3 className=" uppercase text-black font-bold text-xs">Who are we?</h3>
        <h2 className="p-4 font-bold text-4xl text-black">Meet our team</h2>
        <p className="text-center text-black text-md text-wrap">
          Just take a look - each member of the team is watching your every
          gesture <br /> and will hear your every whisper.
        </p>
      </div>

      <div className="my-20 w-full relative">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div className="lg:grid grid-cols-4 mt-10 w-full  ">
              {h.aboutTeam.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 justify-items-center border-2 rounded-lg m-4 border-primary hover:shadow-lg"
                >
                  <img src={item.img} alt="" className="w-40 h-40" />
                  <h4 className="text-sm mt-4 font-semibold">{item.name}</h4>
                  <h6 className="text-xs text-gray-500 uppercase my-2">
                    {item.role}
                  </h6>
                  <p className="text-xs w-[220px] text-center text-gray-500 mb-1">
                    {item.content}
                  </p>
                  <div className="flex justify-evenly gap-3 p-2">
                    <span className="flex space-x-2 cursor-pointer text-white">
                      <FacebookRoundedIcon
                        fontSize="small"
                        className="border-2  border-harvestaLightGreen rounded-full bg-harvestaLightGreen hover:border-primary hover:bg-primary p-[2px]"
                      />
                      <InstagramIcon
                        fontSize="small"
                        className="border-2 border-harvestaLightGreen rounded-full bg-harvestaLightGreen hover:border-primary hover:bg-primary p-[2px]"
                      />
                      <LinkedInIcon
                        fontSize="small"
                        className="border-2 border-harvestaLightGreen rounded-full bg-harvestaLightGreen hover:border-primary hover:bg-primary p-[2px]"
                      />
                      <XIcon
                        fontSize="small"
                        className="border-2 border-harvestaLightGreen rounded-full bg-harvestaLightGreen hover:border-primary hover:bg-primary p-[2px]"
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
        <div className=" hidden lg:flex my-4 ">
          <button className="swiper-button-prev text-primary hover:text-primary-dark absolute left-[-30px] top-[48%] ">
            <ArrowCircleLeftRoundedIcon fontSize="xl" className="text-[46px]" />
          </button>
          <button className="swiper-button-next text-primary hover:text-primary-dark absolute top-[48%] right-[-30px]">
            <ArrowCircleRightRoundedIcon
              fontSize="xl"
              className="text-[46px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
