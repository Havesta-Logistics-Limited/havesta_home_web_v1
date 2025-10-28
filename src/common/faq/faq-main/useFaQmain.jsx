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
        "We accept all major credit/debit cards (Visa, MasterCard, American Express), digital wallets (PayPal, Apple Pay, Google Pay), bank transfers, and cash on delivery in selected areas.",
    },
    {
      title: "How do I update my profile information?",
      answer:
        "Go to your profile settings, tap 'Edit Profile', update your information, and save changes. You can modify your name, email, phone number, and delivery addresses.",
    },
    {
      title: "How to add a review?",
      answer:
        "After receiving your order, go to 'My Orders', select the completed order, and tap 'Write Review'. You can rate the product and seller, add photos, and share your experience.",
    },
    {
      title: " What are the delivery charges?",
      answer:
        "Delivery charges vary based on location and order value. Orders above $50 qualify for free delivery. Express delivery options are available for an additional fee.",
    },
    {
      title: "How do I contact customer support?",
      answer:
        "You can reach our support team through multiple channels: in-app chat, email at support@yourapp.com, phone at ‪+1-234-567-8900‬, or social media. We're available 24/7 to help.",
    },
    {
      title: "Is there a return policy?",
      answer:
        "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Digital products and personalized items are not eligible for returns.",
    },
    {
      title: "Can I track my order's delivery status?",
      answer:
        "Yes, you can track your order status in real-time. Go to 'My Orders' section in the app, select your order, and view detailed tracking information including estimated delivery time.",
    },
  ];
  return { Faqs, handleFaqClick, activefaq };
}
