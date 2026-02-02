import { TbTruckDelivery, TbHeadset, TbCash } from "react-icons/tb";
import { Link } from "react-router-dom";

const WhyChooseSection = () => {
  const list = [
    {
      id: 1,
      title: "Super Fast Delivery",
      text: "Get your orders delivered to your doorsteps within minutes.",
      icon: TbTruckDelivery,
    },
    {
      id: 2,
      title: "Support 24/7",
      text: "We are available 24 hours a day to support you at hello@havesta.com",
      icon: TbHeadset,
    },
    {
      id: 3,
      title: "Money Back Guarantee",
      text: "You can return the product if damaged, and your refund is guaranteed.",
      icon: TbCash,
    },
  ];

  return (
    <div className="relative mx-4 lg:mx-auto lg:max-w-4xl xl:max-w-5xl">
      {/* Glassmorphic section with border */}
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-t-lg shadow-lg">
        <div className="px-6 py-4 lg:px-8 lg:py-6">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:items-end gap-4 lg:gap-6 max-w-4xl mx-auto">
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Why Choose Havesta?
              </h2>
              <p className="text-gray-200 text-sm lg:text-base leading-snug mb-3 max-w-md">
                At Havesta, we believe that everyone deserves access to the
                freshest farm produce, right at their doorstep. Our mission is
                to bridge the gap between local farmers and busy customers,
                ensuring that the highest quality fruits, vegetables, and other
                farm-fresh products are just a click away.
              </p>
              <Link
                to="/about"
                className="inline-block bg-harvestaLightGreen hover:bg-green-600 text-white px-6 py-2 rounded font-medium transition-colors mt-8"
              >
                Read More
              </Link>
            </div>
            <div className="hidden lg:block flex-shrink-0 -mb-6">
              <img
                className="w-72 xl:w-80"
                src="/images/fruit-basket.webp"
                alt="Fresh produce basket"
                width="288"
                height="288"
              />
            </div>
          </div>
        </div>
      </div>

      {/* White bottom section */}
      <div className="bg-white border-l border-r border-b border-gray-400 rounded-b-lg">
        <div className="px-6 py-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 max-w-4xl mx-auto">
            {list.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3 p-4 border border-gray-200 rounded-lg hover:border-primary/30 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <IconComponent className="w-6 h-6 flex-shrink-0 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-snug">
                      {value.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
