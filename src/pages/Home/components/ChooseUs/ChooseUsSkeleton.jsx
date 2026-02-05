export default function ChooseUsSkeleton() {
  return (
    <div className="bg-green-radial px-6">
      <div className="border-2 m-auto pt-16 md:pt-24 max-w-6xl bg-white/10 backdrop-blur-md border-white/20 rounded-md shadow-lg animate-pulse">
        {/* UPPER PART SKELETON */}
        <div className="text-white inter px-8 md:px-12 relative">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-5"></div>
          <div className="h-10 bg-gray-300 rounded w-24 mb-7 sm:mb-14"></div>
          <div className="hidden lg:flex absolute -bottom-14 right-0 w-96 h-48 bg-gray-300 rounded"></div>
        </div>
        {/* LOWER PART SKELETON */}
        <div className="bg-white flex flex-col justify-center gap-2 sm:grid sm:grid-cols-3 sm:py-8">
          {[...Array(3)].map((_, index) => (
            <div className="flex items-stretch gap-1" key={index}>
              <div className="text-harvestaDarkGreen text-3xl w-[30%] flex justify-end items-center mt-4 sm:mt-0 pr-2 sm:py-0 sm:pr-0 font-bold h-full">
                <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex flex-col justify-center w-[70%] pl-3 sm:pl-2 border-l-2 border-l-harvestaDarkGreen sm:border-l-0">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-1"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
