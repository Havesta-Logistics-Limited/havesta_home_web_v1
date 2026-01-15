import { Bounce, ToastContainer } from "react-toastify";
import Hero from "./components/Hero/Hero";
import Form from "./components/Form/Form";
import Overflow from "./components/Overflow/Overflow";
import Reviews from "./components/Reviews/Reviews";
import Faq from "../../common/faq/Faq";
import DownloadApp from "../Home/components/Hero/DownloadApp";

export default function Vendors() {
  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
        transition={Bounce}
      />
      <section>
        <Hero />
        <Form />
        <Overflow />
        <Reviews />
        <div className="font-primary bg-green-radial py-20 md:py-40">
          <Faq />
          <div className="mt-16 md:mt-32">
            <DownloadApp />
          </div>
        </div>
      </section>
    </>
  );
}
