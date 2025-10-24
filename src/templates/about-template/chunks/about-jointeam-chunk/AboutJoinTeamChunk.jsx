import useAboutJoinTeamChunk from "./useAboutJoinTeamChunk";
import { NavLink } from "react-router-dom";
export default function AboutJoinTeamChunk() {
  const h = useAboutJoinTeamChunk();
  return (
    <div className="grid grid-col-1 justify-items-center px-20 lg:mt-10 font-primary relative my-20 mt-0 lg:px-24 pb-44">
      <img
        src={h.aboutMainImage}
        alt="image"
        className=" w-[80%] hidden lg:block"
      />
      <div className="absolute lg:top-[20%] grid grid-cols-1 justify-items-center mx-auto">
        <h1 className="uppercase font-bold text-4xl p-2">Join our team</h1>
        <p className="text-sm text-black text-center w-[370px] my-3">
          We love what we do and we do it with passion. We value the
          experimentation of the message and smart incentives.
        </p>
        <NavLink
          to={"/careers"}
          className="py-3 px-5  mt-4  text-sm rounded-lg bg-primary text-white cursor-pointer hover:bg-primaryHover capitalize"
        >
          See current openings
        </NavLink>
      </div>
    </div>
  );
}
