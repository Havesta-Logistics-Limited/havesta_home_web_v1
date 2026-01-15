import "swiper/css/effect-cards";
import "swiper/css";

import ReuseableHero from "../../common/ReuseableHero";

import Havesta from "./components/Havesta/Havesta";
import Stats from "./components/Stats/Stats";
import MeetTeam from "./components/MeetTeam/MeetTeam";
import JoinTeam from "./components/JoinTeam/JoinTeam";
import Faq from "../../common/faq/Faq";
import DownloadApp from "../Home/components/Hero/DownloadApp";

export default function About() {
  return (
    <>
      <ReuseableHero text={"About Us"} />
      <div className="px-4 sm:px-6 md:px-8">
        <Havesta />
      </div>
      <Stats />
      <div className="px-4 sm:px-6 md:px-8">
        <MeetTeam />
        <JoinTeam />
      </div>
      <div className="font-primary bg-green-radial py-20 md:py-40">
        <Faq />
        <div className="mt-16 md:mt-32">
          <DownloadApp />
        </div>
      </div>
    </>
  );
}
