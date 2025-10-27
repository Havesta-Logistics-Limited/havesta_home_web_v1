import { useState } from "react";

export default function useFaQmain() {
  const [activefaq, setActiveFaq] = useState(null);

  const handleFaqClick = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };
  const Faqs = [
    {
      title: "What does lorem ipsum actually mean?",
      answer: "Havesta is the best investment you can make",
    },
    {
      title: "How do we know what kind of sounds dinosaurs made?",
      answer: "Havesta is the best investment you can make",
    },
    {
      title: "Why work from home is not as fun as we thought it would be?",
      answer: "Havesta is the best investment you can make",
    },
    {
      title: "Do you provide online support?",
      answer: "Havesta is the best investment you can make",
    },
    {
      title: "In what way did human  beings started using words?",
      answer: "Havesta is the best investment you can make",
    },
    {
      title: "Which is the least developed area in the world?",
      answer: "Havesta is the best investment you can make",
    },
  ];
  return { Faqs, handleFaqClick, activefaq };
}
