import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import MarketPlace from "../pages/MarketPlace/MarketPlace";
import SingleNews from "../pages/SingleNews";
import PrivacyPolicy from "../pages/privacypolicy";
import TermsOfUse from "../pages/termsOfUse";
import About from "../pages/About/About";
import News from "../pages/News/News";
import Contact from "../pages/Contact/Contact";
import Vendors from "../pages/Vendors/Vendors";
import Riders from "../pages/Riders/Riders";

const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/vendors",
    element: <Vendors />,
  },
  {
    path: "/riders",
    element: <Riders />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:id",
    element: <SingleNews />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUse />,
  },
  {
    path: "/marketplace",
    element: <MarketPlace />,
  },
  {
    path: "/market",
    element: <MarketPlace />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
