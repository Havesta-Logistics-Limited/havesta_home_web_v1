import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../common/Footer";
import SideModal from "../common/SideModal";
import Navbar from "../common/navbar-template/Navbar";
// import ChatWidget from "../common/ChatWidget";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <SideModal />
      <Box overflow="hidden" flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
      {/* Custom ChatWidget removed. Default Tawk.to widget will be shown. */}
    </div>
  );
};

export default MainLayout;
