import { lazy } from "react";

const NotFound = lazy(() => import("../pages/NotFound"));
const Home = lazy(() => import("../pages/Home/Home"));
const MarketPlace = lazy(() => import("../pages/MarketPlace/MarketPlace"));
const ComingSoon = lazy(() => import("../pages/ComingSoon"));
const SingleNews = lazy(() => import("../pages/SingleNews"));
const PoultryNews = lazy(() => import("../pages/News/PoultryNews"));
const FishNews = lazy(() => import("../pages/News/FishNews"));
const GingerNews = lazy(() => import("../pages/News/GingerNews"));
const PrivacyPolicy = lazy(() => import("../pages/privacypolicy"));
const TermsOfUse = lazy(() => import("../pages/termsOfUse"));
const About = lazy(() => import("../pages/About/About"));
const News = lazy(() => import("../pages/News/News"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Vendors = lazy(() => import("../pages/Vendors/Vendors"));
const Riders = lazy(() => import("../pages/Riders/Riders"));

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
    path: "/ginger-news",
    element: <GingerNews />,
  },
  {
    path: "/fish-news",
    element: <FishNews />,
  },
  {
    path: "/poultry-news",
    element: <PoultryNews />,
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
    path: "/coming-soon",
    element: <ComingSoon />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
