const Card = ({ card }) => {
  return (
    <>
      <div className="w-1/4 h-fit p-[16px] bg-[#fff] flex flex-col gap-4 md:w-1/4 md:h-full">
        <div className="w-full">
          <img className="object-contain w-full h-full" src={card.img} alt="" />
        </div>
        <p className="font-normal w-full text-left text-[24px]">{card.title}</p>
        <p className="text-left text-[#53648B]">{card.body}</p>
        <div className="w-max h-max justify-center items-center bg-[#01BE72] py-[7.55px] px-[15.1px] flex gap-2 rounded-[29px] md:hidden">
          <p className="text-[#fff]">Read more</p>
          <img
            className="w-[15.1px] h-[15.1px] object-contain"
            src="/images/Group 3888.webp"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
