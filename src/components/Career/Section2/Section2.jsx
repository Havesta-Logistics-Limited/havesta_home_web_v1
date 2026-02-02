import Card from "./Card";

const Section2 = () => {
  let cards = [
    {
      title: "Company Values",
      img: "/images/Rectangle 5501.webp",
      body: "Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do.",
    },
    {
      title: "Friendly atmosphere",
      img: "/images/Rectangle 5502.webp",
      body: "We hold a positive attitude in order to foster respect and decency for our entire team.",
    },
    {
      title: "Work-life balance",
      img: "/images/Rectangle 5503.webp",
      body: "For us, a healthy personal life is just as important as the time you spend in the office.",
    },
    {
      title: "Everyday grow",
      img: "/images/Rectangle 5505.webp",
      body: "We provide the necessary support to ensure your skills never stop growing.",
    },
  ];

  return (
    <>
      <div className=" flex justify-center items-center w-full h-screen bg-[#F7F9FC]">
        <div className="flex w-[327px] justify-center flex-col items-center gap-8 md:w-5/6">
          <div>
            <p className="text-center w-full text-[28px] font-career md:text-[50px] md:w-[753px]">
              What make Havesta a great place to work?
            </p>
          </div>
          <div className="w-full overflow-x-scroll overflow-y-hidden pb-10 h-max md:overflow-hidden">
            <div className="flex flex-row gap-8 w-[1200px] h-fit md:w-full">
              {cards.map((card, index) => {
                return <Card key={index} card={card} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
