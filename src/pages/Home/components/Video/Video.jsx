import useVideo from "./useVideo";
import { FaPlay } from "react-icons/fa";

export default function Video() {
  const h = useVideo();

  return (
    <div className="bg-green-radial pb-8 px-6">
      <div className="border border-harvestaYellow w-fit m-auto rounded-md">
        <div
          className="relative w-full max-w-2xl mx-auto cursor-pointer rounded-[10px]"
          style={{
            // fallback for borderRadius if needed
            borderRadius: "10px",
          }}
          onMouseEnter={h.handleMouseEnter}
          onMouseLeave={h.handleMouseLeave}
        >
          <video
            ref={h.videoRef}
            src="/icons/video.mp4"
            controls={false}
            loop
            onClick={h.handleVideoClick}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "10px",
            }}
          />
          {/* Black overlay */}
          {!h.playing && (
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
              <div
                onClick={h.togglePlay}
                className="text-[#FFC141] bg-white flex justify-center items-center p-6 rounded-full "
              >
                <FaPlay />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
