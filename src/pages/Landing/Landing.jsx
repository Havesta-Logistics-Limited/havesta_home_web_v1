import { lazy, Suspense } from "react";
import Hero from "../Home/components/Hero/Hero";
import Loader from "../../common/Loader.jsx";
import LazySection from "../../common/LazySection.jsx";

const DownloadApp = lazy(() => import("../Home/components/Hero/DownloadApp"));
const Standards = lazy(() => import("../Home/components/Standards/Standards"));
const CustomerReviews = lazy(
  () => import("../Home/components/CustomerReviews/CustomerReviews"),
);
const WhyChooseSection = lazy(
  () => import("../../components/landing/new/WhyChooseSection"),
);
const JoinUsSection = lazy(
  () => import("../../components/landing/new/JoinUsSection"),
);
const VideoPlayer = lazy(() => import("../../components/landing/Video"));
const FaqMain = lazy(() => import("../../common/faq/faq-main/FaqMain"));
const CoreValues = lazy(
  () => import("../About/components/CoreValues/CoreValues"),
);

const Landing = () => {
  return (
    <div className="bg-green-radial pb-10">
      <Hero />
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <section className="py-8 md:py-12 px-4 sm:px-8">
            <WhyChooseSection />
          </section>
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <section id="download" className="py-8 md:py-44 px-4 sm:px-8 ">
            <DownloadApp />
          </section>
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <section className="py-8 md:py-20 px-4 sm:px-8">
            <JoinUsSection />
          </section>
        </Suspense>
      </LazySection>
      <LazySection minHeight="360px" fallback={<Loader />}>
        <section className="py-8 md:py-20 px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 max-w-6xl mx-auto">
            <div className="text-center ">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">
                Explore Our Store Today To Save Time & Energy.
              </h1>
              <p className="text-sm sm:text-base leading-relaxed mb-6 text-white/90 max-w-md mx-auto text-center">
                With just a few clicks or taps, you can browse a wide range of
                products, compare prices, and read reviews, all from the comfort
                of your home.
              </p>
            </div>
            <div className="order-1 lg:order-2 w-full max-w-sm lg:max-w-md">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <img
                    src="/images/Rectangle Copy 4.webp"
                    alt="harvesta"
                    className="w-full rounded-lg shadow-lg border-2 border-harvestaYellow"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="/images/Rectangle Copy 3.webp"
                    alt="harvesta"
                    className="w-full rounded-lg shadow-lg border-2 border-harvestaYellow"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                  <img
                    src="/images/Rectangle Copy.webp"
                    alt="harvesta"
                    className="w-full rounded-lg shadow-lg border-2 border-harvestaYellow"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="/icons/explore2.svg"
                    alt="harvesta"
                    className="w-full rounded-lg border-2 border-harvestaYellow"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>
      <LazySection minHeight="360px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <section className="py-8 md:py-20 px-4 sm:px-8">
            <div className="flex justify-center p-6">
              <VideoPlayer />
            </div>
          </section>
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <section className="py-8 md:py-20 px-4 sm:px-8">
            <Standards />
          </section>
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <section className="py-8 md:py-20 px-4 sm:px-8">
            <CustomerReviews />
          </section>
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <section className="py-8 md:py-20 px-4 sm:px-8">
            <CoreValues />
          </section>
        </Suspense>
      </LazySection>
      <LazySection minHeight="320px" fallback={<Loader />}>
        <Suspense fallback={<Loader />}>
          <section className="py-8 md:py-20 px-4 sm:px-8">
            <FaqMain />
          </section>
        </Suspense>
      </LazySection>
    </div>
  );
};

export default Landing;
