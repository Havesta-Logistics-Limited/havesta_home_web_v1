const MobileReview = ({ type }) => {
  const backgroundColor =
    type === "customer" || type === "rider"
      ? "bg-harvestaYellow"
      : "bg-harvestaDarkGreen";
  const headingText =
    type === "customer" || type === "rider" ? "text-black" : "text-white";

  return (
    <div
      className={`p-4 w-full grid grid-flow-row justify-items-center font-primary mb-16 lg:hidden h-screen ${backgroundColor} relative`}
    >
      <h1
        className={`text-center font-bold text-3xl items-center ${headingText} mt-5`}
      >
        {type === "customer" ? "Customer Reviews" : ""}
      </h1>

      <img
        src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1722617521/Group_1000002059_qabyxt.svg"
        className="z-10 mt-10"
        alt=""
      />

      <div className="grid grid-flow-col justify-items-center items-center gap-1">
        <div className="">
          <img
            src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1721822422/Rectangle_12_bc6elk.png"
            className="w-20 h-[80px] p-2 rounded-full object-cover"
            alt=""
          />
        </div>

        <div className="grid grid-flow-row ">
          <h4 className={`font-bold ${headingText}`}>Zoey Amobeda</h4>
          <h5 className="text-white semi-bold">FOUNDER & CEO at Havesta</h5>
        </div>
      </div>

      <div>
        <img
          src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1722198074/Group_1000002055_rfmxqn.svg"
          className="w-[40%] absolute top-2 right-0 z-0"
          alt=""
        />
      </div>
    </div>
  );
};

export default MobileReview;
