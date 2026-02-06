import { useState, useEffect } from "react";
import { Linkedin, ArrowRight } from "lucide-react";
import data from "../../config/section5.config";
import Loader from "../../common/Loader"; // Import the Loader component

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true); // State to track image loading

  useEffect(() => {
    setImageLoading(true);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  const activeTestimonial = data[activeIndex];

  return (
    <section className="relative w-full py-16 sm:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="rounded-2xl overflow-hidden bg-gray-50 ring-1 ring-black/5">
            <div className="relative w-full h-72 sm:h-80">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader />
                </div>
              )}
              <img
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                className={`w-full h-full object-cover object-center ${
                  imageLoading ? "hidden" : "block"
                }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-gray-900">
                {activeTestimonial.name}
              </p>
              <p className="text-sm text-gray-600">{activeTestimonial.title}</p>

              <div className="mt-5 rounded-xl bg-white p-5 shadow-sm">
                <p className="text-emerald-600 text-3xl leading-none font-serif select-none">
                  “
                </p>
                <p className="mt-2 text-base text-gray-700 leading-relaxed">
                  {activeTestimonial.text}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <a
                  href={activeTestimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-emerald-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 rounded-full bg-harvestaDarkGreen px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {data.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className={[
                        "h-2 w-2 rounded-full transition-all",
                        i === activeIndex
                          ? "bg-emerald-600 w-5"
                          : "bg-gray-300",
                      ].join(" ")}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  {activeIndex + 1}/{data.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="rounded-3xl overflow-hidden bg-gray-50 ring-1 ring-black/5">
            <div className="grid grid-cols-12 items-stretch">
              {/* Image */}
              <div className="col-span-5 relative h-[520px]">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader />
                  </div>
                )}
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className={`w-full h-full object-cover object-top ${
                    imageLoading ? "hidden" : "block"
                  }`}
                  onLoad={() => setImageLoading(false)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-2xl font-bold leading-tight">
                    {activeTestimonial.name}
                  </p>
                  <p className="text-white/85">{activeTestimonial.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="col-span-7 p-10 flex flex-col h-[520px]">
                <div className="flex-1 flex flex-col">
                  <p className="text-emerald-600 text-5xl leading-none font-serif select-none mt-6">
                    “
                  </p>
                  <div className="mt-3 flex-1 overflow-y-auto pr-2">
                    <p className="text-xl leading-relaxed text-gray-800">
                      {activeTestimonial.text}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200/70">
                  <div className="flex items-center justify-between gap-6 mb-6">
                    <a
                      href={activeTestimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-black/10 hover:ring-emerald-200 hover:text-emerald-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      View LinkedIn
                    </a>

                    <button
                      onClick={handleNext}
                      className="inline-flex items-center gap-3 rounded-full bg-harvestaDarkGreen px-6 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
                      aria-label="Next testimonial"
                    >
                      Next
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {data.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelect(i)}
                          className={[
                            "h-2 w-2 rounded-full transition-all",
                            i === activeIndex
                              ? "bg-harvestaDarkGreen w-6"
                              : "bg-gray-300 hover:bg-gray-400",
                          ].join(" ")}
                          aria-label={`Go to testimonial ${i + 1}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      {activeIndex + 1}/{data.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
