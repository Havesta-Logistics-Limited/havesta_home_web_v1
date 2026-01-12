import { IMG_CUSTOMER } from "../../../../assets/images";

export default function useCustomerReviews() {
  const reviews = [
    {
      review:
        "Harvesta has completely transformed how I shop for groceries! The fresh produce arrives at my doorstep within hours, and the quality is outstanding. I love supporting local farmers through this platform.",
      name: "Adunni Okafor",
      role: "Working Mom",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      review:
        "As a busy professional, Harvesta saves me so much time. The app is user-friendly, delivery is always on time, and the fruits and vegetables are incredibly fresh. Highly recommend!",
      name: "Chukwudi Eze",
      role: "Software Engineer",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      review:
        "I've been using Harvesta for 6 months now and I'm amazed by the consistent quality. The customer service is excellent and they really care about their customers' satisfaction.",
      name: "Folake Adebayo",
      role: "Nutritionist",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
  ];
  return { reviews };
}
