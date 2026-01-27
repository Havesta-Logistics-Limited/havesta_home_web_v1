import { useRef, useState } from "react";

export default function useVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [, setHovered] = useState(false);

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
  return {
    playing,
    togglePlay,
    handleMouseEnter,
    handleVideoClick,
    handleMouseLeave,
    videoRef,
  };
}
