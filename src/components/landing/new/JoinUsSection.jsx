import joinUs from "../../../config/joinUs.config";

const JoinUsSection = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center py-10 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
          Join our growing community
        </h2>
        <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-10 relative px-8 md:px-16 py-8 md:py-12">
          {/* Glassmorphic overlay */}
          <div className="absolute inset-0 md:bg-white/10 md:backdrop-blur-sm rounded-sm md:border md:border-white/20 md:shadow-lg "></div>
          {joinUs.map((item, index) => (
            <div
              className="flex flex-col gap-10 items-center relative z-10"
              key={index}
            >
              <div className="relative">
                {/* Offset background */}
                <div className="absolute inset-0 bg-yellow-500/80 -translate-x-2 -translate-y-2 rounded-xl"></div>

                {/* Main card */}
                <div className="bg-white/90 backdrop-blur-sm border-primary border-2 relative flex flex-col rounded-xl w-full max-w-[340px] h-[350px] z-20 overflow-hidden shadow-xl">
                  <div className="w-full">
                    <img
                      src={item.image}
                      className="w-full h-[180px] object-cover"
                    />
                  </div>

                  <div className="p-4 flex-1">
                    <p className="w-full text-[12px] font-primary lg:text-[13px] text-justify">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Button offset background */}
                <div className="absolute inset-0 bg-black -translate-x-1 -translate-y-1 rounded-3xl"></div>

                {/* Main button */}
                <button className="relative z-10 text-sm bg-yellow-500 border-primary rounded-3xl px-4 py-2 hover:bg-yellow-600 cursor-pointer text-black md:text-base md:px-8 md:py-4 lg:text-md lg:px-10 lg:py-3 lg:w-56 transform hover:scale-105 transition-all duration-200">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JoinUsSection;
