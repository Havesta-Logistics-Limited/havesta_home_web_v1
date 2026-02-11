import PropTypes from "prop-types";
const ReuseableHero = ({
  text,
  image = "https://res.cloudinary.com/dtc89xi2r/image/upload/v1722198074/Group_1000002055_rfmxqn.svg",
}) => {
  return (
    <>
      <div className="w-full h-full bg-primary grid grid-flow-row justify-items-center items-center p-4 font-primary relative overflow-hidden">
        <h2 className="mt-32 font-bold text-white text-2xl md:text-4xl text-center my-20 md:my-40 text-wrap w-[85%] md:w-[65%]">
          {text}
        </h2>
        <img
          src={image}
          className="absolute right-0 w-[300px] md:w-[400px] top-[17%]"
          alt="header-img"
        />
      </div>
    </>
  );
};

ReuseableHero.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default ReuseableHero;
