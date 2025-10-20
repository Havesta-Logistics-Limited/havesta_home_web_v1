import worldIcon from "../../../../assets/animations/worldwide.gif";
import deliveryIcon from "../../../../assets/animations/delivery-scooter.gif";
import badgeIcon from "../../../../assets/animations/badge.gif";
import discussion from "../../../../assets/animations/discussion.gif";

export default function useAboutStatsChunk() {
  const aboutStats = [
    {
      amount: 1,
      content: "Country",
      icon: <img src={worldIcon} alt="" className="w-12 h-12" />,
      duration: 1,
    },

    {
      amount: "21445",
      content: "Monthly Deliveries",
      icon: <img src={deliveryIcon} alt="delivery" className="w-12 h-12" />,
      duration: 5,
    },
    {
      amount: "2335",
      content: "Delivery Maestros",
      icon: <img src={badgeIcon} alt="badge" className="w-12 h-12" />,
      duration: 3,
    },
    {
      amount: "241",
      content: "Employees",
      icon: <img src={discussion} alt="van" className="w-12 h-12" />,
      duration: 2,
    },
  ];

  return { aboutStats };
}
