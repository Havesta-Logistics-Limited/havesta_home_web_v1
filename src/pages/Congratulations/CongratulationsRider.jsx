import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { motion } from "framer-motion";
import LogoNav from "../../common/LogoNav.jsx";

const CongratulationsRider = () => {
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
    navigate("/rider/upload");
  };
  return (
    <>
      <LogoNav />
      <section className="p-5 h-screen bg-harvestaYellow grid grid-flow-row items-center">
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
              className="p-2 font-primary text-sm font-semibold"
              initial={animationConfig.initialLeft}
              whileInView={animationConfig.whileInView}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <ellipse cx="9.5" cy="10" rx="9.5" ry="10" fill="white" />
                  <path
                    d="M14.7709 6.23151C14.7048 6.15815 14.6261 6.09993 14.5394 6.06019C14.4527 6.02046 14.3597 6 14.2657 6C14.1718 6 14.0788 6.02046 13.9921 6.06019C13.9054 6.09993 13.8267 6.15815 13.7605 6.23151L8.45949 12.0701L6.23235 9.61259C6.16367 9.53961 6.08259 9.48223 5.99375 9.44372C5.90491 9.40521 5.81004 9.38633 5.71457 9.38814C5.61909 9.38996 5.52488 9.41244 5.4373 9.45431C5.34972 9.49618 5.2705 9.55661 5.20416 9.63215C5.13782 9.7077 5.08565 9.79687 5.05064 9.89459C5.01563 9.99231 4.99846 10.0967 5.00011 10.2017C5.00176 10.3067 5.0222 10.4103 5.06027 10.5066C5.09833 10.603 5.15327 10.6901 5.22195 10.7631L7.95429 13.7685C8.02044 13.8418 8.09914 13.9001 8.18585 13.9398C8.27256 13.9795 8.36556 14 8.45949 14C8.55343 14 8.64643 13.9795 8.73314 13.9398C8.81985 13.9001 8.89855 13.8418 8.96469 13.7685L14.7709 7.38201C14.8432 7.30872 14.9008 7.21977 14.9402 7.12077C14.9796 7.02176 15 6.91485 15 6.80676C15 6.69867 14.9796 6.59176 14.9402 6.49275C14.9008 6.39375 14.8432 6.3048 14.7709 6.23151Z"
                    fill="#12141D"
                  />
                </svg>
                Complete your registration process
              </div>
            </motion.p>
            <motion.button
              className="p-3 bg-harvestaBlack text-white rounded-full text-sm font-primary w-1/4 mt-4 font-semibold hover:bg-black"
              initial={animationConfig.initialLeft}
              whileInView={animationConfig.whileInView}
              transition={{ duration: 0.6 }}
              onClick={() => nextPage()}
            >
              Continue
            </motion.button>
          </div>

          <div>
            <Suspense
              fallback={
                <div className="text-6xl text-red-600">Picture is loading</div>
              }
            >
              <img
                src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1720271469/ride1_m0lugv.svg"
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

export default CongratulationsRider;
