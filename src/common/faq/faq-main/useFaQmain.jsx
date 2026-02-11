import { useState } from "react";

export default function useFaQmain() {
  const [activefaq, setActiveFaq] = useState(null);

  const handleFaqClick = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };
  const Faqs = [
    {
      title: "What payment methods are accepted?",
      answer:
        "We accept online payments, in-app wallets and cash on delivery in selected areas",
    },
    {
      title: "What are the delivery charges?",
      answer:
        "Delivery charges vary based on location and order value. Orders above ₦50,000 qualify for free delivery. Express delivery options are available for an additional fee.",
    },
    {
      title: "Is there a return policy?",
      answer:
        "We offer a 48-hours return policy for most items. Items must be in original condition with tags attached.",
    },
    {
      title: "How do I contact customer support?",
      answer:
        "You can reach our support team through multiple channels: in-app chat, email at support@havesta.com, phone at ‪+2348109511825‬, or social media. We're available 24/7 to help.",
    },

    {
      title: "How to add a review?",
      answer:
        "After receiving your order, go to 'My Orders', select the completed order, and tap 'Write Review'. You can rate the product and seller, add photos, and share your experience.",
    },
    {
      title: "Can I track my order's delivery status?",
      answer:
        "Yes, you can track your order status in real-time. Go to 'My Orders' section in the app, select your order, and view detailed tracking information including estimated delivery time.",
    },
  ];
  return { Faqs, handleFaqClick, activefaq };
}
