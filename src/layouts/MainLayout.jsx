import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../common/Footer";
import SideModal from "../common/SideModal";
import Navbar from "../common/navbar-template/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <SideModal />
      <Box overflow="hidden" flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default MainLayout;
