import "swiper/css/effect-cards";
import "swiper/css";

import ReuseableHero from "../../common/ReuseableHero";
import useAbout from "./useAbout";
import Havesta from "./components/Havesta/Havesta";
import Stats from "./components/Stats/Stats";
import CoreValues from "./components/CoreValues/CoreValues";
import MeetTeam from "./components/MeetTeam/MeetTeam";
import JoinTeam from "./components/JoinTeam/JoinTeam";
import Faq from "../../common/faq/Faq";

export default function About() {
  return (
    <>
      <ReuseableHero text={"About Us"} />
      <div>
        <Havesta />
        <Stats />
        <CoreValues />
        <MeetTeam />
        <JoinTeam />
        <Faq />
      </div>
    </>
  );
}
