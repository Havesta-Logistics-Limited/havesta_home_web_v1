import useFaQmain from "./useFaQmain";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqMain() {
  const h = useFaQmain();
  return (
    <div className="bg-white w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-full max-w-2xl mx-auto shadow-xl rounded-xl p-6 sm:p-8">
      <p className="text-primary text-xs text-center uppercase tracking-wide">
        Let&apos;s Answer Your Questions
      </p>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6 text-purpleblack text-left">
        Frequently Asked Questions
      </h1>
      <div className="space-y-2">
        {h.Faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <button
              className="flex justify-between items-center w-full gap-4 text-left"
              onClick={() => h.handleFaqClick(index)}
            >
              <h3 className="text-sm sm:text-base font-medium text-purpleblack">
                {faq.title}
              </h3>
              <motion.span
                className={`text-xl sm:text-2xl flex-shrink-0 ${
                  h.activefaq === index ? "text-primary" : "text-gray-300"
                }`}
                animate={{ rotate: h.activefaq === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {h.activefaq === index ? (
                  <IoMdRemoveCircleOutline />
                ) : (
                  <IoMdAddCircleOutline />
                )}
              </motion.span>
            </button>
            <AnimatePresence>
              {h.activefaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-xs sm:text-sm mt-3 pt-3 border-t text-primary border-gray-100">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
