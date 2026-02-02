const navRoutes = [
  {
    name: "Home",
    path: "/",
    hero: "/icons/Hero.webp",
  },

  {
    name: "About",
    path: "/about",
    hero: "/icons/about.webp",
  },

  {
    name: "News",
    path: "/news",
    hero: "/icons/news.svg",
  },
  {
    name: "Contact",
    path: "/contact",
    hero: "/icons/contact.webp",
  },

  {
    name: "Partner",
    hero: "/icons/vendorHero.webp",
    submenu: [
      { name: "Vendor", path: "/vendors" },
      { name: "Rider", path: "/riders" },
    ],
    openNav: true,
  },
];

export const navRoutesMobile = [
  {
    name: "Home",
    path: "/",
    hero: "/icons/Hero.webp",
  },

  {
    name: "About",
    path: "/about",
    hero: "/icons/about.webp",
  },

  {
    name: "News",
    path: "/news",
    hero: "/icons/news.svg",
  },
  {
    name: "Contact",
    path: "/contact",
    hero: "/icons/contact.webp",
  },
  {
    name: "Rider",
    path: "/riders",
    hero: "/icons/contact.webp",
  },
  {
    name: "Vendor",
    path: "/vendors",
    hero: "/icons/contact.webp",
  },
  {
    name: "Marketplace",
    path: "/marketplace",
    hero: "/icons/contact.webp",
  },
];

export default navRoutes;
