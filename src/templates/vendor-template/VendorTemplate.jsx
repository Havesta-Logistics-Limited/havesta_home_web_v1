import { Bounce, toast, ToastContainer } from "react-toastify";

import Faq from "../home-templates/chunks/faq/Faq.jsx";
import VendorHeroChunk from "./chunks/vendor-hero-chunk/VendorHeroChunk.jsx";
import VendorFormChunk from "./chunks/vendor-form-chunk/VendorFormChunk.jsx";
import VendorOverflowChunk from "./chunks/vendor-overflow-chunk/VendorOverflowChunk.jsx";
import VendorReviewsChunk from "./chunks/vendor-reviews-chunk/VendorReviewsChunk.jsx";

export default function VendorTemplate({ hero }) {
  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
        transition={Bounce}
      />
      <section>
        <VendorHeroChunk />

        <VendorFormChunk />

        <VendorOverflowChunk />
        <VendorReviewsChunk />

        <Faq />
      </section>
    </>
  );
}
