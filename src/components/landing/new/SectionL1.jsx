const sectionL1 = () => {
  const list = [
    {
      id: 1,
      title: "Super Fast Delivery",
      text: "Get your orders delivered to your doorsteps within minutes.",
      img: "/images/rocket-sharp.png",
    },
    {
      id: 2,
      title: "Support 24/7",
      text: "We are available 24 hours a day to support you at care@havesta.app",
      img: "/images/call.png",
    },
    {
      id: 3,
      title: "Money Back Guarantee",
      text: "You can return the product if damaged, and your refund is guranteed.",
      img: "/images/dollar.png",
    },
  ];

  return (
    <div className="w-full flex justify-center p-[1rem] md:py-[177.9px] h-fit bg-[#F3F4F64D]">
      <div className="md:w-[66.40%] flex flex-col md:min-h-[604.01px]">
        <div className="w-full flex justify-center items-center h-full bg-white">
          <div className="md:w-[88.88%] h-fit items-center flex gap-[28.31px]">
            <div className="flex gap-[21.23px] flex-col">
              <div className="flex gap-[14.16px] flex-col">
                <p className="text-[31.85px] leading-[35.39px] font-[800]">
                  Why Choose Havesta?
                </p>
                <p className="text-[14.16px] max-w-[552.07px] leading-[25px] font-[400] ">
                  At Havesta, we believe that everyone deserves access to the
                  freshest farm produce, right at their doorstep. Our mission is
                  to bridge the gap between local farmers and busy customers,
                  ensuring that the highest quality fruits, vegetables, and
                  other farm-fresh products are just a click away.
                </p>
              </div>

              <button className="bg-[#005231] text-[14.16px] leading-[14.16px] font-[500] text-[white] w-[101.31px] h-[43.31px] p-[14.16px] rounded-[3.54px]">
                Read More
              </button>
            </div>
            <img
              className="w-[552.07px] h-[377.78px] object-contain"
              src="/images/unsplash_46bom4lObsA.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-[152.01px] bg-[#FFC141] flex justify-center items-center gap-[28.31px]">
          {list.map((value, index) => {
            return (
              <div
                key={index}
                className="flex gap-[14.16px] w-[28.148%] h-[57.62px]"
              >
                <img
                  className="w-[35.39px] h-[35.39px] object-contain"
                  src={value.img}
                  alt=""
                />
                <div className="flex flex-col justify-between gap-[10.62px] items-start">
                  <p className="text-[17.69px] leading-[17.69px] font-[600] text-[#1F2937]">
                    {value.title}
                  </p>
                  <p className="text-[14.16px] leading-[14.16px] font-[400] text-[#4C4C4C]">
                    {value.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default sectionL1;
