import { useState, useEffect } from "react";

const Section7 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const D = [
    {
      title: "Full-Stack Developers",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      section: "engineering",
    },
    {
      title: "Application developer (Flutter)",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "Due to growing workload, we are looking for experienced and talented Flutter Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      section: "engineering",
    },
    {
      title: "Senior Product designer",
      subCategories: ["Hybrid", "Lagos, Nigeria", "Full-time"],
      body: "Since 2019 we’ve worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let’s talk!",
      section: "engineering",
    },
    {
      title: "Product Manager",
      subCategories: ["Remote", "Lagos, Nigeria", "Full-time"],
      body: "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.",
      section: "engineering",
    },
    {
      title: "Product Owner",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "We’ve worked on 30+ major projects from 8 different industries that are being . Need full-cycle product development or an improvement cycle? Let’s talk!",
      section: "engineering",
    },
    {
      title: "Product Owner",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "We’ve worked on 30+ major projects from 8 different industries that are being . Need full-cycle product development or an improvement cycle? Let’s talk!",
      section: "engineering",
    },
    {
      title: "Product Owner",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "We’ve worked on 30+ major projects from 8 different industries that are being . Need full-cycle product development or an improvement cycle? Let’s talk!",
      section: "engineering",
    },
    {
      title: "Full-Stack Developers",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      section: "product",
    },
    {
      title: "Application developer (Flutter)",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "Due to growing workload, we are looking for experienced and talented Flutter Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      section: "product",
    },
    {
      title: "Senior Product designer",
      subCategories: ["Hybrid", "Lagos, Nigeria", "Full-time"],
      body: "Since 2019 we’ve worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let’s talk!",
      section: "product",
    },
    {
      title: "Full-Stack Developers",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      section: "design",
    },
    {
      title: "Full-Stack Developers",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      section: "operational",
    },
    {
      title: "Application developer (Flutter)",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "Due to growing workload, we are looking for experienced and talented Flutter Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      section: "operational",
    },
    {
      title: "Senior Product designer",
      subCategories: ["Hybrid", "Lagos, Nigeria", "Full-time"],
      body: "Since 2019 we’ve worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let’s talk!",
      section: "operational",
    },
    {
      title: "Product Manager",
      subCategories: ["Remote", "Lagos, Nigeria", "Full-time"],
      body: "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.",
      section: "operational",
    },
    {
      title: "Full-Stack Developers",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      section: "marketing",
    },
    {
      title: "Application developer (Flutter)",
      subCategories: ["Lagos, Nigeria", "Full-time"],
      body: "Due to growing workload, we are looking for experienced and talented Flutter Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
      section: "marketing",
    },
  ];

  const [data] = useState(D);

  const [cleanData, setCleanData] = useState(data.slice(0, 5));

  useEffect(() => {
    const cleanD = (index, category) => {
      setActiveIndex(index);
      setCleanData(
        activeIndex === 0
          ? data.slice(0, 5)
          : data.filter((x) => x.section === category).slice(0, 5),
      );
    };

    cleanD(activeIndex, activeCategory);
  }, [activeIndex, activeCategory, data]);

  console.log(cleanData[0].section, activeCategory);

  const Categories = [
    "all",
    "engineering",
    "product",
    "design",
    "operational",
    "marketing",
  ];

  return (
    <div
      id="position"
      className="flex justify-center flex-col items-start w-full h-fit md:items-center bg-[#F7F9FC]"
    >
      <div className="w-full h-[196px] flex items-center justify-center bg-[#01BE72] ">
        <p className="text-white text-[50px] leading-[80px] font-career font-normal">
          We have {data.length} open positions now!
        </p>
      </div>

      <div className="relative w-[327px] flex justify-center flex-row items-start gap-16 lg:w-5/6 lg:py-[1rem]">
        <div className="lg:w-[23.96%] h-fit sticky flex flex-col gap-8 top-[125px]">
          <div className="w-full h-fit">
            {Categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    activeIndex === index ? "bg-[white] " : ""
                  } flex items-center px-[1rem] w-full h-[60px]`}
                >
                  <p
                    className={`${
                      activeIndex === index
                        ? "text-[20px] leading-[32px] text-medium"
                        : "text-[16px] leading-[25.6px] text-normal text-[#253A67]"
                    } cursor-pointer`}
                    onClick={() => {
                      setActiveCategory(category);
                      setActiveIndex(index);
                    }}
                  >
                    {category.charAt(0).toUpperCase() +
                      category.slice(1) +
                      ` (${
                        index === 0
                          ? data.length
                          : data.filter((data) => data.section === category)
                              .length
                      })`}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-[16px] leading-[25.6px] text-normal text-[#253A67]">
            We are always seeking talented people. In case you cannot find your
            desired position here, please send us your LinkedIn profile and give
            us your contact information. We will be in touch.{" "}
          </p>
        </div>
        <div className="w-full flex flex-col gap-[2rem] items-center pb-40">
          {cleanData.map((data, index) => {
            return (
              <div
                key={index}
                className="w-full h-fit bg-white py-[21px] gap-4 flex flex-col px-[34px]"
              >
                <div className="flex flex-col gap-[8px] w-full h-fit">
                  <p className="text-[28px] leading-[44.8px] font-medium">
                    {data.title}
                  </p>
                  <div className="flex gap-[8px]">
                    {data.subCategories.map((sub, index) => {
                      return (
                        <p
                          className="py-2 px-4 text-[14px] leading-[16.41px] font-medium rounded-[29px] border-[1px] border-[#090808]"
                          key={index}
                        >
                          {sub}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full flex flex-col h-fit gap-[8px]">
                  <p className="w-full">{data.body}</p>
                  <div className="w-full h-fit flex justify-end">
                    <button className="flex gap-1 bg-[#090808] py-3 px-4 rounded-[29px] text-white">
                      Read more{" "}
                      <img
                        className="w-[24px] h-[24px] object-contain"
                        src="/images/arrow.webp"
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {activeIndex === 0 ||
          data.filter((x) => x.section === activeCategory).length > 5 ? (
            <button className=" w-fit flex gap-1 py-3 px-6  border-[#090808] border-[1px] rounded-[29px]">
              Show more...
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Section7;
