import DownloadApp from "../Home/components/Hero/DownloadApp";
import Hero from "../Home/components/Hero/Hero";
import Standards from "../Home/components/Standards/Standards";
import CustomerReviews from "../Home/components/CustomerReviews/CustomerReviews";
import LatestNews from "../Home/components/LatestNews/LatestNews";
import WhyChooseSection from "../../components/landing/new/WhyChooseSection";
import JoinUsSection from "../../components/landing/new/JoinUsSection";
import VideoPlayer from "../../components/landing/Video";
import FaqMain from "../../common/faq/faq-main/FaqMain";

const Landing = () => {
  return (
    <div className="bg-green-radial pb-10">
      <Hero />
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <WhyChooseSection />
      </section>
      <section id="download" className="py-8 md:py-12 px-4 sm:px-8">
        <DownloadApp />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <JoinUsSection />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 max-w-6xl mx-auto">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Explore Our Store Today To Save Time & Energy.
            </h1>
            <p className="text-sm sm:text-base leading-relaxed mb-6 text-white/90 max-w-md mx-auto lg:mx-0">
              With just a few clicks or taps, you can browse a wide range of
              products, compare prices, and read reviews, all from the comfort
              of your home.
            </p>
          </div>
          <div className="order-1 lg:order-2 w-full max-w-sm lg:max-w-md">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="/images/Rectangle Copy 4.png"
                  alt="harvesta"
                  className="w-full rounded-lg shadow-lg border border-harvestaYellow"
                />
                <img
                  src="/images/Rectangle Copy 3.png"
                  alt="harvesta"
                  className="w-full rounded-lg shadow-lg border border-harvestaYellow"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <img
                  src="/images/Rectangle Copy.png"
                  alt="harvesta"
                  className="w-full rounded-lg shadow-lg border border-harvestaYellow"
                />
                <img
                  src="/icons/explore2.svg"
                  alt="harvesta"
                  className="w-full rounded-lg border border-harvestaYellow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <div className="flex justify-center p-6">
          <VideoPlayer />
        </div>
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <Standards />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <CustomerReviews />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <LatestNews />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <FaqMain />
      </section>
    </div>
  );
};

export default Landing;
