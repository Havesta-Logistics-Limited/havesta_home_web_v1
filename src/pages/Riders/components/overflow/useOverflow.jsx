import { TbTruck, TbChartLine, TbCoin } from "react-icons/tb";

export default function useOverflow() {
  const riderStats = [
    {
      icon: TbTruck,
      text: "Accept Delivery Orders at your convenience. ",
    },
    {
      icon: TbChartLine,
      text: "Manage your Rides and Income with our management platform",
    },
    {
      icon: TbCoin,
      text: "Grow your income Daily, Weekly, or Montly with Havesta.",
    },
  ];

  return { riderStats };
}
