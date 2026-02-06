export default function DownloadAppSkeleton() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 animate-pulse">
      <section className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-2 max-w-6xl mx-auto py-16">
        <div className="flex flex-col items-center text-center">
          <div className="h-10 bg-gray-300 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-6"></div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <div className="w-36 sm:w-40 lg:w-44 h-12 bg-gray-300 rounded"></div>
            <div className="w-36 sm:w-40 lg:w-44 h-12 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="lg:hidden block">
          <div className="w-[50%] max-w-xs mx-auto mt-10 h-64 bg-gray-300 rounded"></div>
        </div>

        <div className="hidden lg:block">
          <div className="w-full max-w-sm xl:max-w-md mx-auto h-96 bg-gray-300 rounded"></div>
        </div>
      </section>
    </div>
  );
}
