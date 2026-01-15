import useCustomerReviews from "./useCustomerReviews";
import { GoTriangleDown } from "react-icons/go";
import { FaQuoteLeft } from "react-icons/fa";
export default function CustomerReviews() {
  const h = useCustomerReviews();
  return (
    <div className="inter font-primary px-6 relative">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center mb-6">
        Customer Reviews
      </h1>
      <p className="text-white text-center font-light max-w-sm m-auto text-sm lg:text-base my-4 leading-relaxed">
        We are proud of our accomplishments. We will keep delivering excellence
        and satisfaction
      </p>
      
      {/* Glassmorphic container */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 lg:p-8 mt-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {h.reviews.map((rev, index) => (
            <div
              key={rev.name}
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaQuoteLeft className="text-primary text-xl" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center flex-1">
                  {rev.review}
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <div className="flex flex-col items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-3 border-2 border-primary/20">
                    <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{rev.name}</p>
                  <p className="text-gray-600 text-xs">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
