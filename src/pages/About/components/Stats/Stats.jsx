import { useState, useEffect, useRef } from "react";
import useStats from "./useStats";

export default function Stats() {
  const h = useStats();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ value }) => {
    const [count, setCount] = useState(0);
    const numMatch = value.toString().match(/\d+/);
    const target = numMatch ? parseInt(numMatch[0]) : 0;
    const suffix = value.toString().replace(/\d+/, "");

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <>
        {count}
        {suffix}
      </>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="bg-harvestaDarkGreen flex justify-center items-center font-primary py-8 relative mt-10"
    >
      <div className="absolute inset-0 bg-white/15 backdrop-blur-md border-y border-white/20"></div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-4 gap-16 text-white relative z-10">
        {h.aboutStats.map((item, index) => {
          return (
            <div
              className="flex flex-col gap-2 p-3 border-l-2 border-l-harvestaLightGreen  w-40"
              key={index}
            >
              <h1 className="  text-3xl">
                <AnimatedNumber value={item.amount} />
              </h1>
              <p className="text-sm ">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
