import {
  IMG_LEAFLEFT,
  IMG_LEAFRIGHT,
  IMG_LEAFTOP,
  IMG_PEOPLE,
} from "../../../../assets/images";
import useHero from "./useHero";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";

export default function Hero() {
  const h = useHero();
  const [scrollY, setScrollY] = useState(0);
  const { modalOpen } = useModal();
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Healthy", "Fresh"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 100 : 150,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);
  return (
    <>
      <div className="relative w-full min-h-screen bg-cover px-4 sm:px-6 md:px-8 lg:px-10 py-4 flex items-center justify-center">
        <div className="w-full">
          <div className="text-white w-full text-center lg:text-left lg:ml-52 relative z-20 mt-20">
            <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-[90px] font-bold inter relative">
              Find Your{" "}
              <span className="text-4xl sm:text-6xl md:text-6xl lg:text-[90px] text-harvestaYellow italic font-bold mb-6">
                {displayText}
                <span className="inline-block animate-[blink_1s_infinite]" style={{animation: 'blink 1s infinite'}}>|</span>
              </span>
              <img
                src={IMG_LEAFTOP}
                alt=""
                className="hidden lg:flex absolute -top-12 -right-12 animate-[float_1.5s_ease-in-out_infinite]"
                style={{
                  animation: "float 1.5s ease-in-out infinite",
                }}
              />
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-[90px] font-bold inter">
              Groceries
            </h2>
            <p className="text-base mt-5 md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Fresh fruits & veggies, grains, Tubers and More!
            </p>

            <div className="flex flex-col items-center lg:items-start gap-8 mt-12">
              <div className="flex gap-4 items-center">
                <img src={IMG_PEOPLE} alt="" className="w-32 md:w-36" />
                <div className="urbanist flex flex-col">
                  <h1 className="font-bold text-base md:text-lg">
                    500+ customers
                  </h1>
                </div>
              </div>
              <Link
                to="/"
                className="relative w-full sm:w-fit mt-28 md:mt-6 inline-block"
              >
                <div className="bg-harvestaYellow text-harvestaBlack flex items-center justify-center py-3 px-6 rounded-3xl font-bold z-50">
                 Shop Now
                </div>
                <div className="bg-black text-harvestaDarkGreen flex items-center justify-center py-3 px-6 rounded-3xl font-bold absolute top-1 -z-10 left-1 w-full">
                  Shop Now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 ">
          <img
            src={h.heroImage}
            alt=""
            className="hidden lg:block lg:w-[350px] w-[200px]"
          />
        </div>
        <img
          src={IMG_LEAFRIGHT}
          alt=""
          className="absolute hidden lg:block right-48 w-56 top-96 animate-[float_2s_ease-in-out_infinite]"
          style={{
            animation: "float 2s ease-in-out infinite",
          }}
        />
        <img
          src={IMG_LEAFLEFT}
          alt=""
          className="hidden lg:flex absolute top-64 left-0 animate-[float_1.75s_ease-in-out_infinite]"
          style={{
            animation: "float 1.75s ease-in-out infinite",
          }}
        />

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 w-full flex justify-center z-50 transition-opacity duration-300 ${
            modalOpen ? "hidden" : ""
          }`}
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
