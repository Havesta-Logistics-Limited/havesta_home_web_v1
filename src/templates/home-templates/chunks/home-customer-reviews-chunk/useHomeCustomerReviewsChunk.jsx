import { IMG_CUSTOMER } from "../../../../assets/images";

export default function useHomeCustomerReviewsChunk() {
  const reviews = [
    {
      review:
        "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
      name: "Kera Joo",
      role: "Support",
      img: IMG_CUSTOMER,
      color: "white",
      textColor: "text-[#4B5563]",
    },
    {
      review:
        "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
      name: "Coco Pops",
      role: "Support",
      img: IMG_CUSTOMER,
      color: "harvestaYellow",
      textColor: "text-black",
    },
    {
      review:
        "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
      name: "Tom Koch",
      role: "Developer",
      img: IMG_CUSTOMER,
      color: "white",
      textColor: "text-[#4B5563]",
    },
  ];
  return { reviews };
}
