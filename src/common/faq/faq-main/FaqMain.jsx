import useFaQmain from "./useFaQmain";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function FaqMain() {
  const h = useFaQmain();
  return (
    <div className="bg-white md:w-1/2 w-[98%] mt-[-150px] shadow-3xl flex flex-col items-center justify-center py-6 text-purpleblack">
      <div className=" w-[85% ]">
        <p className=" text-purplebl text-xs text-center ">
          LET’S ANSWER YOUR QUESTIONS
        </p>
        <h1 className=" text-center text-xl font-bold mt-4 text-purpleblack">
          Frequently Asked Questions
        </h1>
        <div className="flex-col w-full  my-4 ">
          {h.Faqs.map((faq, index) => (
            <div key={index} className="flex flex-row w-[100%]  p-4 ">
              <div className="flex justify-between items-center w-full gap-3">
                <div>
                  <h3 className="text-md font-medium ">{faq.title}</h3>
                  {h.activefaq === index && (
                    <p className="text-sm mt-2 font-extrabold">{faq.answer}</p>
                  )}
                </div>
                <p
                  className={`text-2xl ${
                    h.activefaq === index
                      ? "text-harvestaBlack"
                      : "text-[#D9D9D9]"
                  } cursor-pointer`}
                  onClick={() => h.handleFaqClick(index)}
                >
                  <IoMdAddCircleOutline />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
