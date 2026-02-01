import HomeIcon from "@mui/icons-material/Home";
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HandshakeIcon from "@mui/icons-material/Handshake";

const navRoutes = [
  {
    name: "Home",
    path: "/",
    hero: "/icons/Hero.webp",
    icon: <HomeIcon />,
  },

  {
    name: "About",
    path: "/about",
    hero: "/icons/about.webp",
    icon: <Diversity3TwoToneIcon />,
  },

  {
    name: "News",
    path: "/news",
    hero: "/icons/news.svg",
    icon: <NewspaperIcon />,
  },
  {
    name: "Contact",
    path: "/contact",
    hero: "/icons/contact.webp",
    icon: <PermContactCalendarIcon />,
  },

  {
    name: "Partner",
    icon: <HandshakeIcon />,
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
    icon: <HomeIcon />,
  },

  {
    name: "About",
    path: "/about",
    hero: "/icons/about.webp",
    icon: <Diversity3TwoToneIcon />,
  },

  {
    name: "News",
    path: "/news",
    hero: "/icons/news.svg",
    icon: <NewspaperIcon />,
  },
  {
    name: "Contact",
    path: "/contact",
    hero: "/icons/contact.webp",
    icon: <PermContactCalendarIcon />,
  },
  {
    name: "Rider",
    path: "/riders",
    hero: "/icons/contact.webp",
    icon: <PermContactCalendarIcon />,
  },
  {
    name: "Vendor",
    path: "/vendors",
    hero: "/icons/contact.webp",
    icon: <PermContactCalendarIcon />,
  },
  {
    name: "Marketplace",
    path: "/marketplace",
    hero: "/icons/contact.webp",
    icon: <PermContactCalendarIcon />,
  },
];

export default navRoutes;
