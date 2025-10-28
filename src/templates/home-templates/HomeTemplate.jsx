import HomeHeroChunk from "./chunks/home-hero-chunk/HomeHeroChunk";
import HomeDownloadChunk from "./chunks/home-hero-chunk/HomeDownloadChunk";
import HomeChooseUsChunk from "./chunks/home-chooseus-chunk/HomeChooseUsChunk";
import Faq from "../../common/faq/Faq";
import HomeJoinChunk from "./chunks/home-join-chunk/HomeJoinChunk";
import HomeSeeTheWorldChunk from "./chunks/home-seeworld-chunk/HomeSeeTheWorldChunk";
import HomeVideoChunk from "./chunks/home-video-chunk/HomeVideoChunk";
import HomeStandardsChunk from "./chunks/home-standards-chunk/HomeStandardsChunk";

export default function HomeTemplate() {
  return (
    <div className="overflow-x-hidden relative font-primary bg-green-radial ">
      <HomeHeroChunk />
      <div>
        <HomeChooseUsChunk />
      </div>
      <div>
        <HomeDownloadChunk />
      </div>

      <HomeJoinChunk />
      <HomeSeeTheWorldChunk />
      <HomeVideoChunk />
      <HomeStandardsChunk />
      <Faq />
    </div>
  );
}
