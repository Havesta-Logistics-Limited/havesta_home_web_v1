import { lazy, Suspense } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import Hero from "./components/hero/Hero";
import Loader from "../../common/Loader.jsx";

const Form = lazy(() => import("./components/form/Form"));
const Overflow = lazy(() => import("./components/overflow/Overflow"));
const Reviews = lazy(() => import("./components/reviews/Reviews"));
const PageFooter = lazy(() => import("../../common/PageFooter"));

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
        <Suspense fallback={<Loader />}>
          <Form />
          <div className="my-32">
            <Overflow />
          </div>
          <section className="py-8 md:py-10 px-4 sm:px-8">
            <Reviews />
          </section>
          <PageFooter />
          <div>Suspense Placeholder</div>
        </Suspense>
        <div>Riders Placeholder</div>
      </section>
    </>
  );
}
