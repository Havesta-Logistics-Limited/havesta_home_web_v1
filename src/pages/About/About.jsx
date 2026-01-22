import "swiper/css/effect-cards";
import "swiper/css";

import ReuseableHero from "../../common/ReuseableHero";
import CoreValues from "./components/CoreValues/CoreValues";
import Havesta from "./components/Havesta/Havesta";
import Stats from "./components/Stats/Stats";
import MeetTeam from "./components/MeetTeam/MeetTeam";
import JoinTeam from "./components/JoinTeam/JoinTeam";
import PageFooter from "../../common/PageFooter";

export default function About() {
  return (
    <>
      <ReuseableHero text={"About Us"} />
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
    </>
  );
}
