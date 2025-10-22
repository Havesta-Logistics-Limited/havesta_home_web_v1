import { Bounce, toast, ToastContainer } from "react-toastify";

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
  }, []);

  useEffect(() => {
    let input = document.querySelector(".phoneNum");

    input.addEventListener("input", (e) => {
      console.log(
        !input.value.length >= 11 && document.activeElement !== input
      );
      if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
      }
      if (input.value.length === 11 && document.activeElement === input) {
        input.classList.add(
          "focus:outline",
          "focus:outline-harvestaLightGreen"
        );
        input.classList.remove("border-red-300", "focus:outline-none");
      }

      if (input.value.length < 11 && document.activeElement === input) {
        input.classList.add("border-red-300", "focus:outline-none");
        input.classList.remove(
          "focus:outline",
          "focus:outline-harvestaLightGreen"
        );
      }
      setFormData((prev) => ({ ...prev, phone_number: input.value }));

      input.value = input.value.replace(/[^0-9]/g, "");
    });
  }, []);

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
