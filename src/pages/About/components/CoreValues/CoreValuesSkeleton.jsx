export default function CoreValuesSkeleton() {
  return (
    <div className="m-3 mb-0 lg:p-24 animate-pulse">
      <div className="flex justify-center mb-8">
        <div className="h-10 bg-gray-300 rounded w-1/3"></div>
      </div>
      <div className="flex justify-center">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-xl border-gray-300 overflow-hidden my-10 h-[480px] w-80 mx-4"
          >
            <div className="w-full h-40 sm:h-48 bg-gray-300"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-3"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
