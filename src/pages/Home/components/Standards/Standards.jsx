import useStandards from "./useStandards";

export default function Standards() {
  const h = useStandards();
  return (
    <div className="inter flex flex-col items-center px-2 py-24">
      {/* Glass container - wraps everything including cards area */}
      <div className="bg-white/10 backdrop-blur-md border-white/20 rounded-md shadow-lg border w-[90%] sm:w-[85%] lg:w-[80%] py-6 lg:py-12 px-6 lg:px-14 relative">
        {/* Green section - extends down to overlap halfway into cards */}
        <div className="bg-primary text-center p-6 sm:p-8 pt-10 sm:pt-12 pb-24 sm:pb-28 lg:pb-32">
          <h1 className="text-white text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-6 ">
            Our Standout Progress
          </h1>
          <p className="text-[#DEDEDE] text-sm md:text-base max-w-2xl mx-auto">
            A good idiom for kids is &quot;It&apos;s raining cats and
            dogs.&quot; Kids know what both cats and dogs are from an early age.
          </p>
        </div>

        {/* Cards - positioned to sit on green div, with higher z-index */}
        <div className="relative z-10 -mt-16 sm:-mt-20 lg:-mt-20 px-2 sm:px-4 lg:px-8 pb-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {h.standards.map((standard) => (
              <div
                key={standard.title}
                className={`${standard.color} p-3 rounded-md w-[calc(50%-0.5rem)] sm:w-[140px] md:w-[160px] lg:w-[170px] text-left`}
              >
                <h1 className="text-primary text-xs mb-3 font-bold">
                  {standard.title}{" "}
                </h1>
                <p className="text-purpleblack text-xl mb-2 font-bold">
                  {standard.number}{" "}
                </p>
                <p className="text-[#4B5563] text-xs">{standard.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
