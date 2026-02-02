import { lazy, Suspense } from "react";
import Hero from "./components/Hero/Hero";
import Loader from "../../common/Loader.jsx";
import LazySection from "../../common/LazySection.jsx";

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
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <ChooseUs />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <DownloadApp />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <Join />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <SeeWorld />
        </Suspense>
      </LazySection>
      <LazySection minHeight="360px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <Video />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <Standards />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <CustomerReviews />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <LatestNews />
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <Faq />
        </Suspense>
      </LazySection>
    </div>
  );
}
