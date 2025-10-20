import "swiper/css/effect-cards";
import "swiper/css";

import Intercom from "@intercom/messenger-js-sdk";
import ReuseableHero from "../../common/ReuseableHero";

import useAboutTemplate from "./useAboutTemplate";
import AboutHavestaChunk from "./chunks/about-havesta-chunk/AboutHavestaChunk";
import AboutStatsChunk from "./chunks/about-stats-chunk/AboutStatsChunk";
import AboutCoreValuesChunk from "./chunks/about-corevalues-chunk/AboutCoreValuesChunk";
import AboutMeetTeamChunk from "./chunks/about-meetteam-chunk/AboutMeetTeamChunk";
import AboutJoinTeamChunk from "./chunks/about-jointeam-chunk/AboutJoinTeamChunk";

export default function AboutTemplate() {
  const h = useAboutTemplate();
  Intercom({
    app_id: "d7aozhso",
  });

  return (
    <>
      <ReuseableHero text={h.headerText} image={h.imageUrl} />
      <div className="p lg:p-24 ">
        <AboutHavestaChunk />

        <AboutStatsChunk />
        <AboutCoreValuesChunk />
        <AboutMeetTeamChunk />
        <AboutJoinTeamChunk />
      </div>
    </>
  );
}
