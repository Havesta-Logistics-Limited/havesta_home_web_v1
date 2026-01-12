import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { motion } from "framer-motion";
import LogoNav from "../../common/LogoNav.jsx";

const CongratulationsVendor = () => {
  const navigate = useNavigate();
  const animationConfig = {
    initialLeft: {
      opacity: 0,
      x: -100,
    },
    initialRight: {
      opacity: 0,
      x: 100,
    },
    whileInView: {
      opacity: 1,
      x: 0,
    },
  };
  /* const params = useParams();
  const stringValue = params.id;
  const actualValue =
    (stringValue === "null") | "undefined" ? null : stringValue;
  console.log(params);
  console.log(params.id);
  if (!actualValue) {
    return <div className="text-[200px]">403 forbidden </div>;
  }
 */
  const nextPage = () => {
    navigate("/");
  };
  return (
    <>
      <LogoNav />
      <section className="p-5 h-screen bg-harvestaBlack grid grid-flow-row items-center">
        <div className="lg:grid grid-flow-col items-center justify-items-center justify-evenly">
          <div className="leading-20 lg:ml-52">
            <motion.h1
              className="text-[49px] text-white items-center font-primary font-semibold "
              initial={animationConfig.initialLeft}
              whileInView={animationConfig.whileInView}
              transition={{
                duration: 0.5,
              }}
            >
              Congratulations! <br /> Application Received
            </motion.h1>

            <motion.p
              className="p-2 font-primary text-sm font-semibold text-white"
              initial={animationConfig.initialLeft}
              whileInView={animationConfig.whileInView}
              transition={{ duration: 0.5 }}
            >
              {/* Complete your registration process */}
            </motion.p>
            <motion.button
              className="p-3 bg-white text-black rounded-full text-sm font-primary w-1/4 mt-4 font-semibold hover:bg-harvestaYellow hover:text-white"
              initial={animationConfig.initialLeft}
              whileInView={animationConfig.whileInView}
              transition={{ duration: 0.6 }}
              onClick={() => nextPage()}
            >
              Go Home
            </motion.button>
          </div>

          <div>
            <Suspense
              fallback={
                <div className="text-6xl text-red-600">Picture is loading</div>
              }
            >
              <img
                src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1720271457/ride2_xrpjgv.svg"
                alt="hero-image"
                className="lg:w-[750px] p-2 w-[400px] hidden lg:block"
                loading="lazy"
              />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
};

export default CongratulationsVendor;
