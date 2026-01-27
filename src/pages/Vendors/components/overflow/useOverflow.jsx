import imgVendor1 from "../../../../../assets/images/vendor-overflow-1.png";
import imgVendor2 from "../../../../../assets/images/vendor-overflow-2.png";
import imgVendor3 from "../../../../../assets/images/vendor-overflow-3.png";

export default function useOverflow() {
  const vendorStats = [
    {
      image: imgVendor1,
      title: "Sell your products to customers around you.",
      description:
        "Bring your products closer to the people who need them most. With access to customers in your area, you can increase visibility, boost sales, and grow your business without relying on middlemen.",
    },
    {
      image: imgVendor2,
      title: "Manage your store with our management platform",
      description:
        "Take full control of your store with a smart management platform built for vendors. Organize your products, monitor sales, and manage orders efficiently—all in one place.",
    },
    {
      image: imgVendor3,
      title: "Grow your business and improve your online presence.",
      description:
        "Build a strong digital presence for your business while growing sales and customer engagement through a modern, easy-to-use platform.",
    },
  ];
  return { vendorStats };
}
