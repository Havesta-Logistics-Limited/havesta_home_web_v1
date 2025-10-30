import HomeHeroChunk from "./chunks/home-hero-chunk/HomeHeroChunk";
import HomeDownloadChunk from "./chunks/home-hero-chunk/HomeDownloadChunk";
import HomeChooseUsChunk from "./chunks/home-chooseus-chunk/HomeChooseUsChunk";
import Faq from "../../common/faq/Faq";
import HomeJoinChunk from "./chunks/home-join-chunk/HomeJoinChunk";
import HomeSeeTheWorldChunk from "./chunks/home-seeworld-chunk/HomeSeeTheWorldChunk";
import HomeVideoChunk from "./chunks/home-video-chunk/HomeVideoChunk";
import HomeStandardsChunk from "./chunks/home-standards-chunk/HomeStandardsChunk";
import HomeCustomerReviewsChunk from "./chunks/home-customer-reviews-chunk/HomeCustomerReviewsChunk";
import HomeLatestNewsChunk from "./chunks/home-latest-news-chunk/HomeLatestNewsChunk";

export default function HomeTemplate() {
  return (
    <div className="overflow-x-hidden relative font-primary bg-green-radial ">
      <HomeHeroChunk />

      <HomeChooseUsChunk />

      <HomeDownloadChunk />

      <HomeJoinChunk />
      <HomeSeeTheWorldChunk />
      <HomeVideoChunk />
      <HomeStandardsChunk />
      <HomeCustomerReviewsChunk />
      <HomeLatestNewsChunk />
      <Faq />
    </div>
  );
}
