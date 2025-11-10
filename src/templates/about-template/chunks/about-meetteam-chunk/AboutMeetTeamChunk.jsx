import Section5 from "../../../../components/Career/Section5";
import useAboutMeetTeamChunk from "./useAboutMeetTeamChunk";
import { FaLinkedin } from "react-icons/fa6";

export default function AboutMeetTeamChunk() {
  const h = useAboutMeetTeamChunk();
  return (
    <div className="p-8 font-primary lg:p-24">
      <div className="  w-[70%] m-auto p-2 mb-10 bg-harvestaDarkGreen"></div>
      <div className="grid grid-cols-1 justify-items-center">
        <h3 className=" uppercase text-black font-bold text-xs">Who are we?</h3>
        <h2 className="p-4 font-bold text-4xl text-black">Meet our team</h2>
        <p className="text-center text-[#5F6980] text-md text-wrap">
          Just take a look - each member of the team is watching your every
          gesture <br /> and will hear your every whisper.
        </p>
      </div>

      <Section5 />
    </div>
  );
}
