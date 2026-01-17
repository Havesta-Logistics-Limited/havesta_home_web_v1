import { TbShoppingCart, TbSettings, TbTrendingUp } from "react-icons/tb";

export default function useOverflow() {
  const vendorStats = [
    {
      icon: TbShoppingCart,
      text: "Sell your products to customers around you. ",
    },
    {
      icon: TbSettings,
      text: "Manage you store/products with our management platform",
    },
    {
      icon: TbTrendingUp,
      text: "Grow your business and improve your online presence. ",
    },
  ];
  return { vendorStats };
}
