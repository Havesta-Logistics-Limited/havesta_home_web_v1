import VideoPlayer from "../../../../components/landing/Video";
import useHomeJoinChunk from "./useHomeJoinChunk";

export default function HomeJoinChunk() {
  const h = useHomeJoinChunk();
  return (
    <div className=" mt-12">
      <h1 className="font-primary text-center font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-12">
        Join our growing community!
      </h1>
      <div className="p-10 border-2 m-auto max-w-6xl py-24 ">
        <div className="lg:grid  grid-flow-col justify-items-center items-center space-y-4 lg:p-1 lg:gap-7 bordr ">
          {h.joinUs.map((item, index) => (
            <div className="flex flex-col items-center">
              <div className=" relative z-20 ">
                <div
                  className="bg-white border-primary border-4 relative grid grid-flow-col lg:grid-flow-row justify-items-center items-center rounded-xl  mx-auto"
                  key={index}
                >
                  <div className="z-10 w-full">
                    <img
                      src={item.image}
                      className="w-[200px] h-[180px] lg:w-[328px] m-2 lg:m-0 object-cover rounded-lg border-primary border-b-4"
                    />
                  </div>

                  <div className="grid grid-flow-row ml-2 lg:ml-0 pb-3">
                    <h5 className="font-secondary text-black lg:text-2xl mt-3 place-self-center lg:place-self-start px-2">
                      {item.count}
                    </h5>
                    <p className=" text-[10px] font-primary lg:text-[13px] lg:text-justify p-2 text-center max-w-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
                <div
                  className={`border hidden  lg:flex h-[330px] absolute w-[95%] -left-4 -top-3 bg-${item.color} -z-20 rounded-2xl`}
                ></div>
              </div>
              <button className="text-[10px] bg-harvestaYellow rounded-3xl p-4 hover:bg-primaryHover cursor-pointer  font-bold lg:text-xs  lg:w-40  place-self-center text-black mt-6">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 p-6">
        <VideoPlayer />
      </div>

      <br />
    </div>
  );
}
