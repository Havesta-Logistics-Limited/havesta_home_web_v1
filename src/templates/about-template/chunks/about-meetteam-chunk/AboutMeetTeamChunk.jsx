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

      <div className="mt-20 w-full relative  flex flex-col items-center">
        {h.aboutTeam.map((team) => (
          <div className="flex text-harvestaBlack " key={team.name}>
            <img src={team.img} alt="" className="w-64" />
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-lg mb-10">{team.testimony} </p>
              </div>
              <div>
                <h1 className="font-bold">{team.name}</h1>
                <p className="text-sm"> {team.role}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-2xl text-harvestaDarkGreen">
                  <FaLinkedin />
                </p>
                <p className="text-lg">{team.profile}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
