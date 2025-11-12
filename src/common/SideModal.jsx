import {navRoutesMobile} from "../routes/navRoutes";
import Logo from "./Logo";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { closeModal } from "../redux/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const SideModal = () => {
  const { modalOpen } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const sideModalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sideModalRef.current && !sideModalRef.current.contains(event.target)) {
      dispatch(closeModal());
    }
  }
  const handleModalOpen = () => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling

    } else {
      document.body.style.overflow = "auto"; // Allow scrolling

    }
  };

  useEffect(() => {
    handleModalOpen(); // Call on initial render and modal state changes
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
      document.removeEventListener("mousedown", handleClickOutside);

    };
  }, [modalOpen]);
  return (
    <>
      <div
    
        className={`lg:hidden h-[100vh] bg-black/50 ${
          modalOpen ? "min-w-[100%] " : "min-w-[0%]"
        } z-40 absolute top-0 left-0 bottom-0 shadow-lg transition-all font-primary `}
         
      >
        {modalOpen && (
          <div
          ref={sideModalRef}
            className={` h-[100vh] bg-primary 
            block min-w-[75%]  
           absolute top-0 left-0 transition ease-in duration-2000 z-50`}
          >
            <div className=" flex justify-between p-4 mt-[27px]">
              <Logo />
              <CloseIcon
                className="text-harvestaYellow"
                onClick={() => dispatch(closeModal())}
                sx={{
                  fontSize: "30px",
                }}
              />
            </div>

            <div className=" h-auto mt-10 grid justify-center items-center space-y-4 w-full">
              {navRoutesMobile.map((item, index) => (
                <Link
                  key={index}
                  className="text-white text-center py-2  w-[150px] mx-auto flex justify-center items-center hover:bg-harvestaLightGreen hover:rounded-lg"
                  to={item.path}
                  onClick={() => dispatch(closeModal())}
                >
    
                  {item.name}
                </Link>
              ))}
            </div>

           {/* <div className="absolute bottom-0  w-full text-center">
              <p className="text-[10px] text-gray-400">@Copyright 2024</p>
              <p className="text-[11px] text-white my-2">Designed By Dregon J&Z Techbase Limited</p>
           </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default SideModal;
