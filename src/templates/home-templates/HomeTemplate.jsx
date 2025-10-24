import HomeHeroChunk from "./chunks/home-hero-chunk/HomeHeroChunk";
import HomeDownloadChunk from "./chunks/home-hero-chunk/HomeDownloadChunk";
import HomeChooseUsChunk from "./chunks/home-chooseus-chunk/HomeChooseUsChunk";
import Faq from "../../common/faq/Faq";
import HomeJoinChunk from "./chunks/home-join-chunk/HomeJoinChunk";

export default function HomeTemplate() {
  return (
    <div className="overflow-x-hidden relative font-primary bg-green-radial px-4">
      <HomeHeroChunk />
      <div className="py-3">
        <HomeChooseUsChunk />
      </div>
      <div className="mt-10 ">
        <HomeDownloadChunk />
      </div>

      <HomeJoinChunk />
      <Faq />
    </div>
  );
}
