import useFaQmain from "./useFaQmain";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function FaqMain() {
  const h = useFaQmain();
  return (
    <div className="bg-white md:w-1/2 w-[98%] mt-[-150px] shadow-3xl flex flex-col items-center justify-center py-6 text-purpleblack absolute -top-11">
      <div className=" w-[85% ]">
        <p className=" text-purplebl text-xs text-center ">
          LET’S ANSWER YOUR QUESTIONS
        </p>
        <h1 className=" text-center text-xl font-bold mt-4 text-purpleblack">
          Frequently Asked Questions
        </h1>
        <div className="flex-col  m-auto  my-4 w-[450px] lg:w-[500px]  ">
          {h.Faqs.map((faq, index) => (
            <div key={index} className="flex flex-col    p-4 ">
              <div className="flex justify-between items-center w-full gap-3">
                <div>
                  <h3 className="text-md font-medium  w-full">{faq.title}</h3>
                </div>
                <p
                  className={`text-2xl ${
                    h.activefaq === index ? "text-primary" : "text-[#D9D9D9]"
                  } cursor-pointer`}
                  onClick={() => h.handleFaqClick(index)}
                >
                  <IoMdAddCircleOutline />
                </p>
              </div>
              {h.activefaq === index && (
                <p className="text-sm mt-2 text-primary font-extrabold border-t p-1">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
