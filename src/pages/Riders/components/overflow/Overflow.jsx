import useOverflow from "./useOverflow";

export default function Overflow() {
  const h = useOverflow();
  return (
    <div className="w-full h-auto bg-harvestaYellow px-3 flex justify-center mt-20">
      {" "}
      {/* container */}
      <div className="w-full max-w-4xl bg-white rounded-[20px] shadow-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {h.riderStats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center font-primary text-[13px] gap-4 p-6 font-semibold text-harvestaGreen"
              >
                <div className="bg-harvestaYellow p-3 rounded-full">
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
