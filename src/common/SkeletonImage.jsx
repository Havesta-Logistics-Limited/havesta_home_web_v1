import PropTypes from "prop-types";
import { useState } from "react";

export default function SkeletonImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  skeletonClassName = "",
  loading = "lazy",
  decoding = "async",
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div
          className={`absolute inset-0 bg-white/10 animate-pulse ${skeletonClassName}`}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`${imgClassName} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

SkeletonImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  skeletonClassName: PropTypes.string,
  loading: PropTypes.string,
  decoding: PropTypes.string,
};
