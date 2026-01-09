import DownloadApp from "../../templates/home-templates/chunks/home-hero-chunk/DownloadApp";
import Hero from "../../templates/home-templates/chunks/home-hero-chunk/HomeHeroChunk";
import HomeStandardsChunk from "../../templates/home-templates/chunks/home-standards-chunk/HomeStandardsChunk";
import HomeCustomerReviewsChunk from "../../templates/home-templates/chunks/home-customer-reviews-chunk/HomeCustomerReviewsChunk";
import HomeLatestNewsChunk from "../../templates/home-templates/chunks/home-latest-news-chunk/HomeLatestNewsChunk";
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
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <DownloadApp />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <JoinUsSection />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row font-primary gap-12 md:gap-20">
          <div className="flex flex-row flex-wrap justify-center mb-8 md:mb-20 max-w-xl gap-4">
            <div className="flex flex-col p-2 gap-4">
              <img src="/images/Rectangle Copy 4.png" alt="harvesta" />
              <img src="/images/Rectangle Copy 3.png" alt="harvesta" />
            </div>
            <div className="flex flex-col mt-8 md:mt-16 p-2 gap-4">
              <img src="/images/Rectangle Copy.png" alt="harvesta" />
              <img src="/icons/explore2.svg" alt="harvesta" />
            </div>
          </div>
          <div className="w-full max-w-md py-4 md:py-8 lg:my-44">
            <h1 className="text-3xl md:text-4xl font-extrabold w-full text-white mb-4">
              Explore Our Store Today To Save Time & Energy.
            </h1>
            <p className="text-xs leading-5 mb-6 text-white">
              With just a few clicks or taps, you can browse a wide range of
              products, compare prices, and read reviews, all from the comfort
              of your home.
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <div className="flex justify-center p-6">
          <VideoPlayer />
        </div>
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <HomeStandardsChunk />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <HomeCustomerReviewsChunk />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <HomeLatestNewsChunk />
      </section>
      <section className="py-8 md:py-12 px-4 sm:px-8">
        <FaqMain />
      </section>
    </div>
  );
};

export default Landing;
