import { navRoutesMobile } from "../routes/navRoutes";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";
import { useEffect, useRef } from "react";
import MobileToggle from "../components/MobileToggle";
import "./SideModal.css";

const SideModal = () => {
  const { modalOpen, closeModal } = useModal();
  const sideModalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onPointerDown = (e) => {
      if (!sideModalRef.current) return;
      if (sideModalRef.current.contains(e.target)) return;
      closeModal();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [modalOpen, closeModal]);

  return (
    <div
      className={`max-lg:block hidden fixed inset-0 z-50 transition-all duration-500 ${
        modalOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/90 backdrop-blur-sm transition-all duration-400 ${
          modalOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={sideModalRef}
        className={`absolute inset-x-0 md:inset-x-4 md:w-96 md:max-w-[90vw] md:right-4 md:left-auto top-0 bg-[#273f2b] backdrop-blur-2xl transition-all duration-500 ease-out ${
          modalOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 py-8">
          <div className="flex justify-between items-center mb-12">
            <Logo />
            <MobileToggle />
          </div>

          <nav className="space-y-8">
            {navRoutesMobile.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={closeModal}
                className={`group block text-2xl font-medium text-white hover:text-harvestaYellow transition-all duration-300 pb-2 ${
                  index < navRoutesMobile.length - 1
                    ? "border-b border-harvestaYellow/20 hover:border-harvestaYellow/60"
                    : ""
                } ${modalOpen ? "animate-fadeInUp" : "opacity-0"}`}
                style={
                  modalOpen
                    ? {
                        animationDelay: `${index * 0.1 + 0.2}s`,
                        animationFillMode: "both",
                      }
                    : {}
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div
            className={`mt-16 pt-8 ${
              modalOpen ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={
              modalOpen
                ? { animationDelay: "0.8s", animationFillMode: "both" }
                : {}
            }
          >
            <p className="text-sm text-white/60">© 2024 Harvesta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
