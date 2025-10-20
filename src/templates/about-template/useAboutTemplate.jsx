import { useInView } from "react-intersection-observer";

export default function useAboutTemplate() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  const headerText =
    "Our dream is to provide effortless direct access to farmers in your city for all fresh farm produce.";
  const imageUrl =
    "https://res.cloudinary.com/dtc89xi2r/image/upload/v1722198074/Group_1000002055_rfmxqn.svg";

  return {
    headerText,
    imageUrl,
    ref,
    inView,
  };
}
