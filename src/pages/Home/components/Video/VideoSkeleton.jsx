export default function VideoSkeleton() {
  return (
    <div className="bg-green-radial pb-8 px-6 animate-pulse">
      <div className="border border-harvestaYellow w-fit m-auto rounded-md">
        <div
          className="relative w-full max-w-2xl mx-auto rounded-[10px] bg-gray-300"
          style={{
            borderRadius: "10px",
            height: "360px", // Approximate height of the video player
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="bg-gray-400 flex justify-center items-center p-6 rounded-full h-20 w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
