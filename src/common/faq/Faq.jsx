import useFaQ from "./useFaQ";
import FaqMain from "./faq-main/FaqMain";

export default function Faq({ title = "Get The app now" }) {
  const h = useFaQ();
  return (
    <div className="inter full pt-20 font-primary bg-green-radial ">
      <div className="full  bg-green-radial bg-center bg-contain sm:bg-cover flex flex-col items-center justify-center py-10 mt-7 relative pt-80 ">
        <FaqMain />

        {/* <div className="flex flex-col md:flex-row bg-transparent mt-[10rem]">
          <div className="flex flex-col text-white text-center w-[500px] justify-center px-10 sm:mb-[10rem] mb-[3rem]">
            <h1 className="text-4xl font-bold mt-10 capitalize">{title}</h1>
            <p className="my-5 px-12 text-sm ">
              Get fresh farm produce delivered in minutes from a variety of
              trusted vendors
            </p>
            <div className="flex gap-5 justify-center">
              <div className="w-[150px]">
                {" "}
                <img
                  src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/App_Store_brjnhq.svg"
                  className="w-full object-fit  h-auto"
                />
              </div>
              <div className="w-[150px]">
                {" "}
                <img
                  src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/Play_Store_wq2cvo.svg"
                  className="w-full object-fit  h-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <img
              src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823766/Group_1002049_qumfck.png"
              className=" w-[400px]  h-auto object-contain rounded-lg "
            />
          </div>
        </div> */}
        <div className="  px-4 py-16 pl-16">
          <section className="  grid grid-flow-col justify-center items-center box-border  py-4  ">
            <div className="grid grid-flow-row">
              <div className="grid grid-flow-row justify-items-center">
                <h2 className="text-3xl font-bold font-primary text-white mb-4 md:text-4xl">
                  Get Your App
                </h2>
                <p className="text-[15px] text-center text-[#DEDEDE] text-wrap w-[400px]">
                  Get fresh farm produce delivered in minutes from a variety of
                  trusted vendors offering fruits, veggies, tubers, grains, and
                  nuts.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4 ">
                  <img
                    src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/App_Store_brjnhq.svg"
                    alt="first_img"
                    width={160}
                  />
                  <img
                    src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718623942/Play_Store_wq2cvo.svg"
                    alt="second_img"
                    width={160}
                  />
                </div>
              </div>
            </div>

            <div className=" md:grid grid-flow-row justify-center p-0 hidden  ">
              <img
                src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1721823608/Group_1000001793_qvhqd7.png"
                alt=""
                className="w-[750px]"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
