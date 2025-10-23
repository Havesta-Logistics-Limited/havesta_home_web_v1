import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Footer from "../common/Footer";
import SideModal from "../common/SideModal";
import { useSelector } from "react-redux";
import NavbarTemplate from "../common/navbar-template/NavbarTemplate";

const MainLayout = () => {
  const { modalOpen } = useSelector((state) => state.modalReducer);
  return (
    <>
      <NavbarTemplate />
      <SideModal />
      <Box overflow="hidden" flexGrow={1}>
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default MainLayout;
