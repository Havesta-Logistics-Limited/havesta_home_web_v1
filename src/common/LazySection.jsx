import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  fallback = null,
  rootMargin = "200px",
  minHeight = "200px",
  className = "",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={ref} className={className} style={{ minHeight }}>
      {isVisible ? children : fallback}
    </div>
  );
}

LazySection.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
  rootMargin: PropTypes.string,
  minHeight: PropTypes.string,
  className: PropTypes.string,
};
