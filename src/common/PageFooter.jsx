import DownloadApp from "../pages/Home/components/Hero/DownloadApp";
import Faq from "./faq/Faq";

const PageFooter = () => {
  return (
    <div className="font-primary bg-green-radial py-20 md:py-40">
      <Faq />
      <div className="mt-16 md:mt-32">
        <DownloadApp />
      </div>
    </div>
  );
};

export default PageFooter;
