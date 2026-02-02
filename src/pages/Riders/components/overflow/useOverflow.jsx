import imgRider1 from "../../../../assets/images/rider-overflow-1.webp";
import imgRider2 from "../../../../assets/images/rider-overflow-2.webp";
import imgRider3 from "../../../../assets/images/rider-overflow-3.webp";

export default function useOverflow() {
  const riderStats = [
    {
      image: imgRider1,
      title: "Accept Delivery Orders at your convenience.",
      description:
        "Accept delivery orders at your convenience and manage your schedule with ease. Choose when you’re available and handle deliveries without pressure.",
    },
    {
      image: imgRider2,
      title: "Manage your Rides and Income with our management platform",
      description:
        "Manage your rides and income easily with our smart management platform. Track deliveries, monitor earnings, and stay in control of your daily activities from one simple dashboard.",
    },
    {
      image: imgRider3,
      title: "Grow your income Daily, Weekly, or Monthly with Havesta.",
      description:
        "Earn more with steady sales and flexible income timelines. With Havesta, you can grow your income daily, weekly, or monthly while focusing on what you do best.",
    },
  ];

  return { riderStats };
}
