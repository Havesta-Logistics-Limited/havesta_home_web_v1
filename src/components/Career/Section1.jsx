import { HashLink } from "react-router-hash-link";

const Section1 = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-[#ffffff] h-screen lg:w-full">
        <div className="h-max pt-30 w-[327px] flex flex-col-reverse lg:flex-row lg:w-5/6 lg:h-[48.23%]">
          <div className="w-full flex flex-col gap-4 h-full lg:w-1/2">
            <div className="w-full flex justify-center lg:justify-start">
              <p className="text-[28px] lg:text-[50px] font-career">
                Join the Team
              </p>
            </div>
            <div className="w-full flex flex-col-reverse gap-8 lg:flex-col">
              <p className="w-full lg:w-[489px] text-[18px] text-center lg:text-left">
                Havesta is an employee-centred company that looks after every
                employee, gives autonomy to make choices, supports
                self-development and career growth. Our development team is
                always in search of talented individuals to join our
                employee-centred culture.
              </p>
              <div className="w-full flex gap-8 flex-col items-center lg:items-start">
                <p className="w-full text-[18px] text-center lg:text-left">
                  Navigate below to see our current open positions!
                </p>
                <div className=" cursor-pointer user-none w-[194px] h-[48px] justify-center items-center bg-[#01BE72] flex gap-2 rounded-[29px]">
                  <HashLink to="/careers/#position" className="text-[#fff]">
                    Open position
                  </HashLink>
                  <img
                    className="w-[24px] rotate-90 h-[24px] object-contain"
                    src="/images/Group 3888.webp"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-row items-center relative w-full  lg:w-1/2">
            <div className="w-full lg:h-full relative lg:left-[-100px]">
              <img
                className="object-contain w-full h-full"
                src="/images/RESIZE ME - YouTube.webp"
                alt=""
              />
            </div>
            <div className="hidden lg:block lg:absolute lg:right-0 top-5 lg:h-full ">
              <img
                className="object-contain w-5/6 h-5/6"
                src="/images/Group 128.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
