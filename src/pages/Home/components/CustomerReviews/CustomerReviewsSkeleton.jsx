export default function CustomerReviewsSkeleton() {
  return (
    <div className="inter font-primary px-6 relative animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-6"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto my-4"></div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 lg:p-8 mt-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-300 p-3 rounded-full h-10 w-10"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mb-4 flex-1"></div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-gray-300 rounded-full mx-0.5"
                    ></div>
                  ))}
                </div>
                <div className="flex flex-col items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-3 border-2 border-gray-300 bg-gray-300"></div>
                  <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
                  <div className="h-3 bg-gray-300 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
