import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import routes from "./config/routes.config";
import CongratulationsRider from "./pages/Congratulations/CongratulationsRider";
import UploadRider from "./pages/Upload/UploadRider";
import FinalMessageRider from "./pages/FinalMessage/FinalMessageRider";
import FinalMessageVendor from "./pages/FinalMessage/FinalMessageVendor";
import CongratulationsVendor from "./pages/Congratulations/CongratulationsVendor";
import CommissionPage from "./pages/CommissionPage";
import TermsVendor from "./pages/TermsVendor/TermsVendor";
import UploadVendor from "./pages/Upload/UploadVendor";
import VendorModal from "./templates/news-template/vendorModal.jsx";
import ScrollToTop from "./common/scrollToTop";
import Career from "./pages/Career/Career";
import Landing from "./pages/Landing/Landing";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import ComingSoon from "./pages/ComingSoon.jsx";
// import UserSignup from './pages/UserSignup';

// import SideModal from './common/SideModal';
function App() {
  const environment = import.meta.env.VITE_ENVIRONMENT;

  return (
    <>
      <ScrollToTop />
      <Routes>
        {environment != "development" ? (
          <>
            <Route path="/" element={<MainLayout />}>
              {routes.map((route, index) =>
                route.index ? (
                  <Route index element={route.element} key={index} />
                ) : (
                  <Route
                    path={route.path}
                    element={route.element}
                    key={index}
                  />
                )
              )}
            </Route>
            <Route
              path="/riders/congratulations"
              element={<CongratulationsRider />}
            />{" "}
            {/* SHOLD HAVE AN ID IN THE ROUTE FOR PROD */}
            <Route
              path="/vendors/congratulations"
              element={<CongratulationsVendor />}
            />{" "}
            {/* SHOLD HAVE AN ID IN THE ROUTE FOR PROD */}
            <Route path="/rider/upload" element={<UploadRider />} />
            <Route path="/vendor/upload" element={<UploadVendor />} />
            <Route path="/finalmessage" element={<FinalMessageRider />} />
            <Route
              path="/finalmessage_vendor"
              element={<FinalMessageVendor />}
            />
            <Route path="/vendors/commission" element={<CommissionPage />} />
            <Route
              path="/vendors/terms_and_conditions"
              element={<TermsVendor />}
            />
            <Route path="/vendor/modal" element={<VendorModal />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/market" element={<MarketPlace />} />
          </>
        ) : (
          <Route path="/" element={<ComingSoon />} />
        )}
      </Routes>
    </>
  );
}

export default App;
