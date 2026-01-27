import useJoin from "./useJoin";

export default function Join() {
  const h = useJoin();
  return (
    <div className=" pt-12  bg-green-radial">
      <h1 className="font-primary text-center font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-12">
        Join our growing community!
      </h1>

      <div className="p-10 border m-auto max-w-6xl py-24 bg-white/10 backdrop-blur-md border-white/20 rounded-md shadow-lg">
        <div className="grid lg:grid-cols-3 gap-7 justify-items-center items-stretch">
          {h.joinUs.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between w-full h-full"
            >
              <div className="relative z-20 flex-1 flex items-center w-full">
                <div className="bg-white border-primary border-4 grid grid-flow-row justify-items-center items-start rounded-xl w-full h-full mx-auto">
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
                    <p className="text-[9px] font-primary lg:text-[13px] lg:text-justify p-2 text-center max-w-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
                <div
                  className={`border hidden lg:flex h-[330px] absolute w-[95%] -left-4 -top-3 bg-${item.color} -z-20 rounded-2xl`}
                ></div>
              </div>

              <button className="text-[10px] bg-harvestaYellow rounded-3xl p-4 hover:bg-[#E6A91C] cursor-pointer font-bold lg:text-xs lg:w-40 text-black mt-6">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
