import React, { useRef, useState } from "react";

export default function useHomeVideoChunk() {
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
  return {
    playing,
    togglePlay,
    handleMouseEnter,
    handleVideoClick,
    handleMouseLeave,
    videoRef,
  };
}
