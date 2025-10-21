import NotFound from "../pages/NotFound";

import HomeTemplate from "../templates/home-templates/HomeTemplate";

import Marketplace from "../pages/Marketplace";

import RouteWrapper from "../templates/news-template/RouteWrapper";

import SingleNews from "../pages/SingleNews";
import FinalMessageRider from "../pages/FinalMessage/FinalMessageRider";
import PrivacyPolicy from "../pages/privacypolicy";
import TermsOfUse from "../pages/termsOfUse";
import AboutTemplate from "../templates/about-template/AboutTemplate";
import NewsTemplate from "../templates/news-template/NewsTemplate";
import ContactTemplate from "../templates/contact-template/ContactTemplate";
import VendorTemplate from "../templates/vendor-template/VendorTemplate";
import RiderTemplate from "../templates/rider-template/RiderTemplate";
const routes = [
  {
    path: "/home",

    element: <RouteWrapper component={HomeTemplate} hero="" />,
  },
  {
    path: "/about",
    element: (
      <RouteWrapper
        component={AboutTemplate}
        hero={
          "https://res.cloudinary.com/dtc89xi2r/image/upload/v1718624097/EatFood.com_7_yexfzh.png"
        }
      />
    ),
  },
  {
    path: "/contact",
    element: (
      <RouteWrapper component={ContactTemplate} hero="/icons/contact.png" />
    ),
  },
  {
    index: true,

    element: (
      <RouteWrapper
        component={HomeTemplate}
        hero="https://res.cloudinary.com/dtc89xi2r/image/upload/v1718725096/Group_3733_vyipoo.png"
      />
    ),
  },
  {
    path: "/vendors",
    element: (
      <RouteWrapper component={VendorTemplate} hero="/icons/vendorHero.png" />
    ),
  },
  {
    path: "/riders",
    element: (
      <RouteWrapper
        component={RiderTemplate}
        hero="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719527266/EatFood.com_8_exoobu.svg"
      />
    ),
  },
  {
    path: "/news",
    element: <RouteWrapper component={NewsTemplate} hero="/icons/news.svg" />,
  },
  {
    path: "/news/:id",
    element: <RouteWrapper component={SingleNews} hero="/icons/news.svg" />,
  },
  {
    path: "/privacy-policy",
    element: <RouteWrapper component={PrivacyPolicy} />,
  },
  {
    path: "/terms-of-use",
    element: <RouteWrapper component={TermsOfUse} />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "*",
    element: <RouteWrapper component={NotFound} hero="/icons/news.svg" />,
  },

  /*  {
    path: "/riders/congratulations/:id",
    element: (
      <RouteWrapper component={CongratulationsRider} hero="/icons/news.svg" />
    ),
  }, */
];

export default routes;
