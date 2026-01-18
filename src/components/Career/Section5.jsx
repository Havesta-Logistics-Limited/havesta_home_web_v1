import { useState, useRef } from "react";
import { FiLinkedin } from "react-icons/fi";
import data from "../../config/section5.config";

const Section5 = () => {
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [list, setList] = useState(data);
  const denominator = data.length;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const reduceFraction = (numerator, denominator) => {
    const divisor = gcd(numerator, denominator);
    return divisor === data.length
      ? "full"
      : `${numerator / divisor}/${denominator / divisor}`;
  };

  const [progress, setProgress] = useState(`${activeIndex}/${data.length}`);
  const newIndex = activeIndex + 1;
  const numerator = newIndex === data.length + 1 ? 1 : newIndex;

  const nextTes = (numerator, denominator) => {
    setActiveIndex((prevIndex) =>
      prevIndex >= data.length ? 1 : prevIndex + 1,
    );
    setProgress(reduceFraction(numerator, denominator));
    setList((prevList) => {
      const newList = [...prevList];
      newList.push(newList.shift());
      return newList;
    });
  };

  const changeTes = (list, index) => {
    setActiveIndex(index);
    setProgress(reduceFraction(index, denominator));
    if (index - 1 >= 0 && index - 1 < list.length) {
      let part1 = list.slice(index);
      let part2 = list.slice(0, index - 1);
      let part3 = list.slice(index - 1, index);
      let nL = part3.concat(part1.concat(part2));
      setList(nL);
    } else {
      setList(data);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-max py-[5rem]  ">
      <div className="w-full max-w-sm mx-auto flex justify-center flex-col items-center gap-16 lg:w-[90%] lg:max-w-6xl xl:w-[85%]">
        <div className="flex w-full h-max gap-4 flex-col">
          <div className="relative flex-col flex lg:flex-row justify-end lg:gap-0 items-center w-full lg:h-[537px]">
            <div className="flex-col gap-8 h-max flex lg:flex-row items-center left-0 justify-end lg:w-[78.78%] lg:h-[476px]">
              {data
                .slice()
                .reverse()
                .map((el, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-full transition relative flex-col duration-500 ease-in-out lg:absolute lg:flex-row flex justify-end h-max lg:py-[71px] lg:pr-[71px] shadow-section5 bg-white lg:w-[63.97%] ${
                        el.id !== activeIndex
                          ? el.id === data.length
                            ? "z-10 opacity-1 delay-500"
                            : "z-20 opacity-1 delay-500"
                          : "z-30 opacity-1"
                      }`}
                      data-type={
                        el.id !== activeIndex
                          ? el.id === data.length
                            ? "after-active-no"
                            : "before-active-no"
                          : "active-no"
                      }
                    >
                      <img
                        className="h-full w-full object-cover object-top rounded-t-lg lg:hidden"
                        src={el.image}
                        alt=""
                      />
                      <div className="lg:w-[73.97%] w-full flex-col justify-start gap-4 lg:gap-0 lg:justify-between h-auto lg:h-[334px] lg:flex-row px-6 lg:pl-36 lg:pr-8 py-6 lg:py-[71px] items-start flex rounded-b-lg lg:rounded-none">
                        <span className="text-7xl text-harvestaDarkGreen font-serif leading-none">
                          “
                        </span>
                        <div className="w-full lg:w-[89.41%] h-[350px] lg:h-full justify-between flex flex-col">
                          <p className="text-16 lg:text-20">{el.text}</p>
                          <div>
                            <p className="text-20 font-bold">{el.name}</p>
                            <p className="text-16">{el.title}</p>
                          </div>
                          <a
                            href={el.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 items-center hover:text-harvestaDarkGreen transition-colors cursor-pointer"
                          >
                            <span className="bg-harvestaDarkGreen text-white p-2 rounded">
                              <FiLinkedin className="text-xl" />
                            </span>
                            {"LinkedIn profile"}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {list.map((el, index) => {
              return (
                <img
                  key={index}
                  className={
                    el.id === activeIndex
                      ? "hidden lg:flex absolute left-[0] z-40 lg:w-[25.12%] lg:h-[422px] object-cover"
                      : "hidden lg:flex cursor-pointer w-[7.57%] h-[422px] object-cover transition-height duration-500 ease-in-out lg:hover:h-[438px]"
                  }
                  onClick={() => changeTes(data, el.id)}
                  src={el.image}
                  alt=""
                />
              );
            })}
          </div>
          <div className="relative z-40 hidden lg:flex justify-end w-full h-[41px]">
            <div className="w-[63.97%] hidden md:flex justify-between h-full">
              <div className="flex flex-col justify-between">
                <p className="text-[16px]">
                  {activeIndex}/{data.length} Testimonials
                </p>
                <div className="w-[80px] h-[5px] bg-[#f4f4f4]">
                  <div
                    className={`w-${progress} h-full bg-[#01BE72] transition-all duration-500 eas-in-out`}
                  ></div>
                </div>
              </div>
              <p
                className="text-[24px] gap-6 flex cursor-pointer"
                ref={nextRef}
                onClick={() => nextTes(numerator, denominator)}
              >
                {"Next"}
                <img
                  className="invert w-[34px] h-[34px] object-contain"
                  src="/images/Group 3888.png"
                />
              </p>
            </div>
            <div className="w-[22.71%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
