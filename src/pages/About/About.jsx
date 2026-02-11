import "swiper/css/effect-cards";
import "swiper/css";

import { lazy, Suspense } from "react";
import ReuseableHero from "../../common/ReuseableHero";
import Loader from "../../common/Loader.jsx";

const CoreValues = lazy(() => import("./components/CoreValues/CoreValues"));
const Havesta = lazy(() => import("./components/Havesta/Havesta"));
const Stats = lazy(() => import("./components/Stats/Stats"));
const MeetTeam = lazy(() => import("./components/MeetTeam/MeetTeam"));
const JoinTeam = lazy(() => import("./components/JoinTeam/JoinTeam"));
const PageFooter = lazy(() => import("../../common/PageFooter"));

export default function About() {
  return (
    <>
      <ReuseableHero text={"About Us"} />
      <Suspense fallback={<Loader />}>
        <div className="px-4 sm:px-6 md:px-8">
          <Havesta />
        </div>
        <Stats />
        <section className="mt-32 mb-16">
          <CoreValues variant="light" />
        </section>

        <div className="px-4 sm:px-6 md:px-8">
          <MeetTeam />
          <JoinTeam />
        </div>
        <PageFooter />
      </Suspense>
    </>
  );
}
