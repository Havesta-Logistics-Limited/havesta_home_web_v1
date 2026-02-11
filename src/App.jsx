import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import ScrollToTop from "./common/scrollToTop";
import Loader from "./common/Loader.jsx";
import routes from "./config/routes.config";
import LazyToastContainer from "./common/LazyToastContainer.jsx";

// Standalone routes (lazy loaded to keep initial bundle small)
const Landing = lazy(() => import("./pages/Landing/Landing"));
const CongratulationsRider = lazy(
  () => import("./pages/Congratulations/CongratulationsRider"),
);
const CongratulationsVendor = lazy(
  () => import("./pages/Congratulations/CongratulationsVendor"),
);
const UploadRider = lazy(() => import("./pages/Upload/UploadRider"));
const UploadVendor = lazy(() => import("./pages/Upload/UploadVendor"));
const FinalMessageRider = lazy(
  () => import("./pages/FinalMessage/FinalMessageRider"),
);
const FinalMessageVendor = lazy(
  () => import("./pages/FinalMessage/FinalMessageVendor"),
);
const CommissionPage = lazy(() => import("./pages/CommissionPage"));
const TermsVendor = lazy(() => import("./pages/TermsVendor/TermsVendor"));
const VendorModal = lazy(() => import("./pages/News/vendorModal.jsx"));
const Career = lazy(() => import("./pages/Career/Career"));

function RouteFallback() {
  return <Loader />;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <LazyToastContainer />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Homepage */}
            <Route index element={<Landing />} />

            {/* Main site routes */}
            {routes
              .filter((route) => !route.index)
              .map((route, index) => (
                <Route path={route.path} element={route.element} key={index} />
              ))}
          </Route>

          {/* Standalone routes */}
          <Route
            path="/riders/congratulations"
            element={<CongratulationsRider />}
          />
          <Route
            path="/vendors/congratulations"
            element={<CongratulationsVendor />}
          />
          <Route path="/rider/upload" element={<UploadRider />} />
          <Route path="/vendor/upload" element={<UploadVendor />} />
          <Route path="/finalmessage" element={<FinalMessageRider />} />
          <Route path="/finalmessage_vendor" element={<FinalMessageVendor />} />
          <Route path="/vendors/commission" element={<CommissionPage />} />
          <Route
            path="/vendors/terms_and_conditions"
            element={<TermsVendor />}
          />
          <Route path="/vendor/modal" element={<VendorModal />} />
          <Route path="/careers" element={<Career />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
