import Hero from "./components/Hero/Hero";
import DownloadApp from "./components/Hero/DownloadApp";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Join from "./components/Join/Join";
import SeeWorld from "./components/SeeWorld/SeeWorld";
import Video from "./components/Video/Video";
import Standards from "./components/Standards/Standards";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import LatestNews from "./components/LatestNews/LatestNews";
import Faq from "../../common/faq/Faq";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative font-primary bg-green-radial">
      <Hero />
      <ChooseUs />
      <DownloadApp />
      <Join />
      <SeeWorld />
      <Video />
      <Standards />
      <CustomerReviews />
      <LatestNews />
      <Faq />
    </div>
  );
}
