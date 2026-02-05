export default function SeeWorldSkeleton() {
  return (
    <div className="bg-green-radial pt-20 pb-14 md:pb-20 animate-pulse">
      <div className="pt-12 flex flex-col justify-center gap-4 pb-24 sm:flex-row sm:items-center m-auto max-w-4xl px-4 md:gap-6">
        <div className="m-auto max-w-sm md:w-[40rem] lg:w-[45rem]">
          <div className="w-full h-[220px] md:h-[280px] lg:h-[320px] bg-gray-300 rounded-lg"></div>
        </div>
        <div className="w-full">
          <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto mb-3 sm:mx-0"></div>
          <div className="h-4 bg-gray-300 rounded w-full mx-auto mb-2 sm:mx-0"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto sm:mx-0"></div>
        </div>
      </div>
    </div>
  );
}
