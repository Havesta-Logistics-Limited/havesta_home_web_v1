import { Bounce, ToastContainer } from "react-toastify";
import Hero from "./components/Hero/Hero";
import Form from "./components/Form/Form";
import Overflow from "./components/Overflow/Overflow";
import Reviews from "./components/Reviews/Reviews";
import Faq from "../../common/faq/Faq";

export default function Riders() {
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
        <Faq />
      </section>
    </>
  );
}
