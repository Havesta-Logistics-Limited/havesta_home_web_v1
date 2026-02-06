import { lazy, Suspense } from "react";
import Hero from "./components/Hero/Hero";
import LazySection from "../../common/LazySection.jsx";
import ChooseUsSkeleton from "./components/ChooseUs/ChooseUsSkeleton.jsx";
import DownloadAppSkeleton from "./components/Hero/DownloadAppSkeleton.jsx";
import JoinSkeleton from "./components/Join/JoinSkeleton.jsx";
import VideoSkeleton from "./components/Video/VideoSkeleton.jsx";
import CustomerReviewsSkeleton from "./components/CustomerReviews/CustomerReviewsSkeleton.jsx";
import FaqMainSkeleton from "../../common/faq/faq-main/FaqMainSkeleton"; // Correct import for FaqMainSkeleton
import SeeWorldSkeleton from "./components/SeeWorld/SeeWorldSkeleton";
import StandardsSkeleton from "./components/Standards/StandardsSkeleton";
import SlidingNewsSkeleton from "../../common/sliding-news/SlidingNewsSkeleton";

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
      <LazySection minHeight="320px" fallback={<ChooseUsSkeleton />}>
        <Suspense fallback={<ChooseUsSkeleton />}>
          <ChooseUs />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<DownloadAppSkeleton />}>
        <Suspense fallback={<DownloadAppSkeleton />}>
          <DownloadApp />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<JoinSkeleton />}>
        <Suspense fallback={<JoinSkeleton />}>
          <Join />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<SeeWorldSkeleton />}>
        <Suspense fallback={<SeeWorldSkeleton />}>
          <SeeWorld />
        </Suspense>
      </LazySection>
      <LazySection minHeight="360px" fallback={<VideoSkeleton />}>
        <Suspense fallback={<VideoSkeleton />}>
          <Video />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<StandardsSkeleton />}>
        <Suspense fallback={<StandardsSkeleton />}>
          <Standards />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<CustomerReviewsSkeleton />}>
        <Suspense fallback={<CustomerReviewsSkeleton />}>
          <CustomerReviews />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<SlidingNewsSkeleton />}>
        <Suspense fallback={<SlidingNewsSkeleton />}>
          <LatestNews />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<FaqMainSkeleton />}>
        <Suspense fallback={<FaqMainSkeleton />}>
          <Faq />
        </Suspense>
      </LazySection>
    </div>
  );
}
