export default function Loader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-radial-gradient from-harvestaLightGreen/20 to-transparent">
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-harvestaLightGreen/30 rounded-full"></div>
        {/* Inner spinning ring */}
        <div className="absolute inset-0 border-4 border-t-harvestaDarkGreen border-r-transparent border-b-harvestaYellow border-l-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-harvestaDarkGreen font-primary font-medium tracking-wide animate-pulse">
        Loading...
      </p>
    </div>
  );
}
