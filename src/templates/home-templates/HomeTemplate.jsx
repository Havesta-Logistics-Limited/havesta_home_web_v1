import HomeHeroChunk from "./chunks/home-hero-chunk/HomeHeroChunk";
import HomeDownloadChunk from "./chunks/home-hero-chunk/HomeDownloadChunk";
import HomeChooseUsChunk from "./chunks/home-chooseus-chunk/HomeChooseUsChunk";
import HomeExploreChunk from "./chunks/home-explore-chunk/HomeExploreChunk";
import Faq from "../../common/faq/Faq";

export default function HomeTemplate() {
  return (
    <div className="overflow-x-hidden relative font-primary">
      <HomeHeroChunk />

      <div className="mt-10 ">
        <HomeDownloadChunk />
      </div>
      <div className="py-3">
        <HomeChooseUsChunk />
      </div>
      <HomeExploreChunk />
      <Faq />
    </div>
  );
}
