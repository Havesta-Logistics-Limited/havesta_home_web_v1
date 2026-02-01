import { lazy, Suspense } from "react";
import Hero from "./components/Hero/Hero";
import Loader from "../../common/Loader.jsx";

const DownloadApp = lazy(() => import("./components/Hero/DownloadApp"));
const ChooseUs = lazy(() => import("./components/ChooseUs/ChooseUs"));
const Join = lazy(() => import("./components/Join/Join"));
const SeeWorld = lazy(() => import("./components/SeeWorld/SeeWorld"));
const Video = lazy(() => import("./components/Video/Video"));
const Standards = lazy(() => import("./components/Standards/Standards"));
const CustomerReviews = lazy(
  () => import("./components/CustomerReviews/CustomerReviews"),
);
const LatestNews = lazy(() => import("./components/LatestNews/LatestNews"));
const Faq = lazy(() => import("../../common/faq/Faq"));

export default function Home() {
  return (
    <div className="overflow-x-hidden relative font-primary bg-green-radial">
      <Hero />
      <Suspense fallback={<Loader />}>
        <ChooseUs />
        <DownloadApp />
        <Join />
        <SeeWorld />
        <Video />
        <Standards />
        <CustomerReviews />
        <LatestNews />
        <Faq />
      </Suspense>
    </div>
  );
}
