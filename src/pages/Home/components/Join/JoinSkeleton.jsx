export default function JoinSkeleton() {
  return (
    <div className="pt-12 bg-green-radial animate-pulse">
      <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto mb-12"></div>

      <div className="p-10 border m-auto max-w-6xl py-24 bg-white/10 backdrop-blur-md border-white/20 rounded-md shadow-lg">
        <div className="grid lg:grid-cols-3 gap-7 justify-items-center items-stretch">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between w-full h-full"
            >
              <div className="relative z-20 flex-1 flex items-center w-full">
                <div className="bg-white border-primary border-4 grid grid-flow-row justify-items-center items-start rounded-xl w-full h-full mx-auto">
                  <div className="z-10 w-full">
                    <div className="w-[200px] h-[180px] lg:w-[328px] m-2 lg:m-0 object-cover rounded-lg border-primary border-b-4 bg-gray-300"></div>
                  </div>

                  <div className="grid grid-flow-row ml-2 lg:ml-0 pb-3">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mt-3 place-self-center lg:place-self-start px-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full p-2 text-center max-w-sm"></div>
                  </div>
                </div>
                <div
                  className={`border hidden lg:flex h-[330px] absolute w-[95%] -left-4 -top-3 bg-gray-300 -z-20 rounded-2xl`}
                ></div>
              </div>

              <div className="h-12 bg-gray-300 rounded-3xl w-40 mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
