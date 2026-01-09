import { Bounce, ToastContainer } from "react-toastify";

import { useEffect } from "react";
import { setIcon } from "../../redux/features/iconSlice.js";
import { useDispatch } from "react-redux";
import RiderHeroChunk from "./chunks/rider-hero-chunk/RiderHeroChunk.jsx";
import RiderFormChunk from "./chunks/rider-form-chunk/RiderFormChunk.jsx";
import RiderOverflowChunk from "./chunks/rider-overflow-chunk/RiderOverflowChunk.jsx";
import RiderReviewsChunk from "./chunks/rider-reviews-chunk/RiderReviewsChunk.jsx";
import Faq from "../../common/faq/Faq.jsx";

export default function RiderTemplate() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIcon("rider"));

    return () => {
      dispatch(setIcon("home"));
    };
  }, [dispatch]);

  // NOTE: Avoid direct DOM listeners here; the form hook handles input state.

  return (
    <>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
        transition={Bounce}
      />
      <section>
        <RiderHeroChunk />

        <RiderFormChunk />

        <RiderOverflowChunk />

        <RiderReviewsChunk />

        <Faq />
      </section>
    </>
  );
}
