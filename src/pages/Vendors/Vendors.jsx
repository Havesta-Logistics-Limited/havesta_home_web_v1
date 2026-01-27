import { Bounce, ToastContainer } from "react-toastify";
import Hero from "./components/hero/Hero";
import Form from "./components/form/Form";
import Overflow from "./components/overflow/Overflow";
import Reviews from "./components/reviews/Reviews";
import PageFooter from "../../common/PageFooter";

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
        <div className="my-32">
          <Overflow />
        </div>
        <section className="py-8 md:py-10 px-4 sm:px-8">
          <Reviews />
        </section>
        <PageFooter />
      </section>
    </>
  );
}
