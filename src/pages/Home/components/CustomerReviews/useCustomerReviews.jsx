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
      img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      review:
        "I've been using Harvesta for 6 months now and I'm amazed by the consistent quality. The customer service is excellent and they really care about their customers' satisfaction.",
      name: "Folake Adebayo",
      role: "Nutritionist",
      img: "https://img.freepik.com/free-photo/portrait-gorgeous-girl-standing-with-arms-crossed-studio_482257-104554.jpg?semt=ais_hybrid&w=740&q=80",
      rating: 5,
    },
  ];

  const rider = [
    {
      review:
        "Working as a Harvesta rider has been amazing! The flexible schedule allows me to earn good money while managing my studies. The support team is always helpful.",
      name: "Emeka Okonkwo",
      role: "Delivery Rider",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      review:
        "Harvesta provides consistent delivery opportunities and fair compensation. The app makes it easy to track earnings and manage deliveries efficiently.",
      name: "Kemi Adebisi",
      role: "Part-time Rider",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      review:
        "I've been riding for Harvesta for over a year. Great platform, reliable payments, and excellent customer support. Highly recommend for anyone looking for flexible work.",
      name: "Tunde Bakare",
      role: "Full-time Rider",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
  ];

  const vendor = [
    {
      review:
        "Harvesta has helped me reach more customers than ever before! My farm produce sells faster and I get better prices. The platform is user-friendly and supportive.",
      name: "Ngozi Okoro",
      role: "Vegetable Farmer",
      img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      review:
        "As a fruit vendor, Harvesta has transformed my business. I can now sell directly to customers without middlemen, increasing my profits significantly.",
      name: "Ibrahim Musa",
      role: "Fruit Vendor",
      img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
    {
      review:
        "The vendor support on Harvesta is excellent. They help with everything from product listing to customer management. My sales have doubled since joining!",
      name: "Fatima Aliyu",
      role: "Organic Farmer",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },
  ];

  return { reviews, rider, vendor };
}
