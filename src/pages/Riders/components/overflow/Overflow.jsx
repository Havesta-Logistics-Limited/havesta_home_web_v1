import useOverflow from "./useOverflow";

export default function Overflow() {
  const h = useOverflow();
  return (
    <div className="w-full h-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {h.riderStats.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg border-2 border-black"
                style={{ backgroundColor: "#2D2D2D" }}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold text-center mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-center text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
