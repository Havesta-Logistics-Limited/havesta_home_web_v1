const WhyChooseSection = () => {
  const list = [
    {
      id: 1,
      title: "Super Fast Delivery",
      text: "Get your orders delivered to your doorsteps within minutes.",
      img: "/images/rocket-sharp.png",
    },
    {
      id: 2,
      title: "Support 24/7",
      text: "We are available 24 hours a day to support you at hello@havesta.com",
      img: "/images/call.png",
    },
    {
      id: 3,
      title: "Money Back Guarantee",
      text: "You can return the product if damaged, and your refund is guaranteed.",
      img: "/images/dollar.png",
    },
  ];

  return (
    <div className=" relative">
      {/* Glassmorphic section with border */}
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 mx-4 lg:mx-8 rounded-t-lg shadow-lg">
        <div className="px-3 lg:px-0 py-3 lg:py-6">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:items-end gap-4 lg:gap-6 lg:py-10 max-w-4xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Why Choose Havesta?
              </h2>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed mb-3 max-w-lg">
                At Havesta, we believe that everyone deserves access to the
                freshest farm produce, right at their doorstep. Our mission is
                to bridge the gap between local farmers and busy customers,
                ensuring that the highest quality fruits, vegetables, and other
                farm-fresh products are just a click away.
              </p>
              <button className="bg-harvestaLightGreen hover:bg-green-600 text-white px-6 py-3 rounded font-medium transition-colors">
                Read More
              </button>
            </div>
            <div className="hidden lg:block -mb-16">
              <img
                className="w-96 xl:w-84"
                src="/images/fruit-basket.png"
                alt="Fresh produce basket"
              />
            </div>
          </div>
        </div>
      </div>

      {/* White bottom section */}
      <div className="bg-white border-l px-4 border-r border-b border-gray-400 mx-4 lg:mx-8 rounded-b-lg">
        <div className="px-3 lg:px-0 py-8">
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-4 max-w-6xl mx-auto">
            {list.map((value, index) => {
              return (
                <div key={index} className="flex items-start gap-4 flex-1">
                  <img
                    className="w-8 h-8 mt-1 flex-shrink-0"
                    src={value.img}
                    alt=""
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
