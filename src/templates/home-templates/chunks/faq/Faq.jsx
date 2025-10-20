import { IoArrowForwardCircle } from "react-icons/io5";
import { colors } from "../../../../utils/globals";

import useFaQ from "./useFaQ";

export default function Faq({ title = "Get The app now" }) {
  const h = useFaQ();
  return (
    <div className="full mt-20 font-primary ">
      <div className="full bg-faq-pattern bg-center bg-contain sm:bg-cover flex flex-col items-center justify-center py-10 mt-7">
        <div className="bg-white md:w-1/2 w-[98%] mt-[-150px] shadow-3xl">
          <h1 className="uppercase text-center text-4xl font-black mt-10">
            FAQ&apos;s
          </h1>
          <div className="flex flex-wrap p-4 my-10">
            {h.Faqs.map((faq, index) => (
              <div
                key={index}
                className="flex flex-row w-[100%] md:w-[50%] p-4"
              >
                <div className="mr-4 mt-1">
                  <IoArrowForwardCircle size={"25px"} color={colors.primary} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-md font-medium">{faq.title}</h3>
                  <p className="mt-2 text-sm">{faq.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-transparent mt-[10rem]">
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
        </div>
      </div>
    </div>
  );
}
