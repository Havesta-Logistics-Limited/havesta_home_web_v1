import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import SideModal from "../common/SideModal";
import Navbar from "../common/navbar-template/Navbar";
// import ChatWidget from "../common/ChatWidget";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <SideModal />
      <main id="main-content">
        <div className="overflow-hidden flex-grow">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
