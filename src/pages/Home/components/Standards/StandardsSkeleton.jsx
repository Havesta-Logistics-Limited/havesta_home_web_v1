export default function StandardsSkeleton() {
  return (
    <div className="inter flex flex-col items-center px-2 py-24 animate-pulse">
      <div className="bg-white/10 backdrop-blur-md border-white/20 rounded-md shadow-lg border w-[90%] sm:w-[85%] lg:w-[80%] py-6 lg:py-12 px-6 lg:px-14 relative">
        <div className="bg-gray-300 text-center p-6 sm:p-8 pt-10 sm:pt-12 pb-24 sm:pb-28 lg:pb-32">
          <div className="h-8 bg-gray-400 rounded w-3/4 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-400 rounded w-full mx-auto mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-5/6 mx-auto"></div>
        </div>

        <div className="relative z-10 -mt-16 sm:-mt-20 lg:-mt-20 px-2 sm:px-4 lg:px-8 pb-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 p-3 rounded-md w-[calc(50%-0.5rem)] sm:w-[140px] md:w-[160px] lg:w-[170px] text-left h-32"
              >
                <div className="h-4 bg-gray-300 rounded w-2/3 mb-3"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
