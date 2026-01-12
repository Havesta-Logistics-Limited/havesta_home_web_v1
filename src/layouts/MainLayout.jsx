import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../common/Footer";
import SideModal from "../common/SideModal";
import Navbar from "../common/navbar-template/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <SideModal />
      <Box overflow="hidden" flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
