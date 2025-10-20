import useHomeChooseUsChunk from "./useHomeChooseUsChunk";

const ChooseUs = () => {};

export default function HomeChooseUsChunk() {
  const h = useHomeChooseUsChunk();
  return (
    <div className="flex flex-col items-center py-8 font-primary backgroundImage z-0">
      <h1 className="text-4xl font-bold mb-7">Why Choose Us</h1>
      <p className="text-primary font-primary text-wrap text-center mb-7 text-lg font-semibold">
        We deliver produce at the peak of its freshness, straight from the farm
        to your door.
      </p>
      <div className="grid grid-flow-col justify-items-center gap-3">
        {h.images.map((item, index) => (
          <img
            src={item}
            key={index}
            alt={`image-${index}`}
            className="w-[300px] mb-10"
          />
        ))}
      </div>
    </div>
  );
}
