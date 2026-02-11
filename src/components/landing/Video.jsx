import { useRef, useState } from "react";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative w-full max-w-3xl mx-auto cursor-pointer rounded-[10px] border-4 border-[#FFC141] p-1"
      style={{
        // fallback for borderRadius if needed
        borderRadius: "10px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src="/icons/video.mp4"
        controls={false}
        loop
        onClick={handleVideoClick}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "10px",
        }}
      />
      {/* Black overlay */}
      {!playing && (
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
          <IconButton onClick={togglePlay} aria-label="Play video">
            <PlayArrowIcon style={{ fontSize: 64, color: "#FFC141" }} />
          </IconButton>
        </div>
      )}
      {/* Pause icon */}
      {hovered && playing && (
        <IconButton
          onClick={togglePlay}
          aria-label="Pause video"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <PauseIcon style={{ fontSize: 64, color: "#FFC141" }} />
        </IconButton>
      )}
    </div>
  );
};

export default VideoPlayer;
