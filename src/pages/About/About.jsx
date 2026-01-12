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
  const h = useAbout();

  return (
    <>
      <ReuseableHero text={h.headerText} image={h.imageUrl} />
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
