export default function FaqMainSkeleton() {
  return (
    <div className="bg-white w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-full max-w-2xl mx-auto shadow-xl rounded-xl p-6 sm:p-8 animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto mb-2"></div>
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-6"></div>
      <div className="space-y-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg p-4 bg-gray-50"
          >
            <div className="flex justify-between items-center w-full gap-4">
              <div className="h-5 bg-gray-300 rounded w-2/3"></div>
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
