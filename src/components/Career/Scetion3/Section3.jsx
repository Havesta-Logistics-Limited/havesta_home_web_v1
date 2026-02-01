import Tile from "./Tile";

const Section3 = () => {
  const tiles = [
    {
      title: "Flexible working hours",
      img: "/images/Clock.webp",
    },
    {
      title: "Sport compensation",
      img: "/images/Barbell.webp",
    },
    {
      title: "Health care Insurance",
      img: "/images/ShieldCheck.webp",
    },
    {
      title: "Marriage bonus",
      img: "/images/HandsClapping.webp",
    },
    {
      title: "Fun team events",
      img: "/images/Confetti.webp",
    },
    {
      title: "Perfessional grow budget",
      img: "/images/RocketLaunch.webp",
    },
    {
      title: "30 days paid vacation",
      img: "/images/Calendar.webp",
    },
    {
      title: "Competitive salary",
      img: "/images/Wallet.webp",
    },
    {
      title: "Compensation for eyeglasses",
      img: "/images/Eyeglasses.webp",
    },
    {
      title: "Allowance for first-graders",
      img: "/images/GraduationCap.webp",
    },
    {
      title: "Childbirth allowances",
      img: "/images/Baby.webp",
    },
    {
      title: "Employee referral bonus",
      img: "/images/Target.webp",
    },
    {
      title: "Birthdays celebration",
      img: "/images/Cake.webp",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-full h-max pt-20 pb-20 bg-[#ffffff]">
        <div className="w-[327px] flex justify-center flex-col items-center gap-8 md:w-5/6">
          <div>
            <p className="text-[28px] text-center w-full font-career md:text-[50px] md:w-[753px]">
              What benefits are waiting for you?
            </p>
            <p className="text-center">
              Havesta offers a variety of hand-picked benefits that you can take
              advantage of!
            </p>
          </div>
          <div className="flex flex-row gap-4 flex-wrap w-full h-max">
            {tiles.map((tile, index) => {
              return <Tile key={index} data={tile} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
