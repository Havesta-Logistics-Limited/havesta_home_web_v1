import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import SideModal from "../common/SideModal";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { modalOpen } = useSelector((state) => state.modalReducer);
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
