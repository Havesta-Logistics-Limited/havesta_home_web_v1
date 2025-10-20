import VideoPlayer from "../../../../components/landing/Video";
import JoinUs from "../../../../components/landing/JoinUs";
import Reviews from "../../../../components/landing/Reviews";

export default function HomeExploreChunk() {
  return (
    <div className=" mt-20">
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row font-primary gap-20">
        <div className="flex flex-row mb-20">
          <div className="flex flex-col p-2">
            <img src="/icons/explore1.svg" alt="harvesta" />
            <img src="/icons/ex.svg" alt="harvesta" className="mt-4" />
          </div>
          <div className="flex flex-col mt-16 p-2">
            <img src="/icons/expl.svg" alt="harvesta" />
            <img src="/icons/explore2.svg" alt="harvesta" className="mt-4" />
          </div>
        </div>
        <div className="w-80  lg:my-44">
          <h1 className="text-4xl font-extrabold w-[350px]">
            {" "}
            Explore Our Store Today To Save Time & Energy.
          </h1>
          <p className="text-xs p-2 leading-5 mt-2">
            With just a few clicks or taps, you can browse a wide range of
            products, compare prices, and read reviews, all from the comfort of
            your home.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8 p-6">
        <VideoPlayer />
      </div>

      <JoinUs />

      <Reviews />

      <br />
    </div>
  );
}
