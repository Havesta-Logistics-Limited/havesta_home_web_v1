import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
export default function useChooseUs() {
  const why = [
    {
      icon: <IoIosRocket />,
      title: "Super Fast Delivery",
      content: "Get your orders delivered to your doorsteps within minutes.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Support 24/7",
      content:
        "We are available 24 hours a day to support you at hello@havesta.com",
    },
    {
      icon: <BsCurrencyDollar />,
      title: "Money Back Guarantee",
      content:
        "You can return the product if damaged, and your refund is guranteed.",
    },
  ];
  return { why };
}
