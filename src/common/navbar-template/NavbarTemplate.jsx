import { Link } from "react-router-dom";
import navRoutes from "../../routes/navRoutes.jsx";
import { useEffect, useRef, useState } from "react";
import Logo from "../Logo.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import { openModal } from "../../redux/features/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function Navbar() {
  const { icon } = useSelector((state) => state.iconReducer);
  const dispatch = useDispatch();

  const navRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  function toggleDropdown(index) {
    setDropdownOpen((prev) => {
      const nextOpen = activeDropdownIndex !== index ? true : !prev;
      return nextOpen;
    });
    setActiveDropdownIndex((prev) => (prev === index ? null : index));
  }

  useEffect(() => {
    function handlePointerDown(e) {
      if (!dropdownOpen) return;

      // Close when clicking anywhere outside the nav routes container
      const el = dropdownRef.current;
      if (el && !el.contains(e.target)) {
        setDropdownOpen(false);
        setActiveDropdownIndex(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [dropdownOpen]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // keep --nav-h in sync with actual navbar height so page content can
  // offset exactly and avoid visual jumps when nav style changes
  useEffect(() => {
    const el = navRef.current;

    function setNavH() {
      if (!el) return;
      document.documentElement.style.setProperty(
        "--nav-h",
        `${el.offsetHeight}px`
      );
    }

    setNavH();

    let ro;
    if (typeof ResizeObserver !== "undefined" && el) {
      ro = new ResizeObserver(() => setNavH());
      ro.observe(el);
    }

    window.addEventListener("resize", setNavH);
    return () => {
      window.removeEventListener("resize", setNavH);
      if (ro && el) ro.unobserve(el);
    };
  }, []);

  return (
    <div ref={navRef} className="fixed top-0 left-0 z-50 w-full font-primary text-white">
      <div
        className={
          "px-6 py-4 transition-all duration-300 " +
          (scrolled
            ? "bg-[#0B3B25]/15 backdrop-blur-sm border-white/10 shadow-[0_1px_12px_rgba(0,0,0,0.25)]"
            : "bg-transparent")
        }
      >
        <div className="py-3 px-4 md:px-10">
          <div className="grid grid-cols-3 items-center max-w-6xl m-auto relative">
            <div className="justify-self-start">
              <div className="h-12 flex items-center rounded-3xl px-4 border border-white/55 bg-transparent hover:bg-white/15 transition-all">
                <Link to={"/"} className="flex items-center gap-2">
                  {/* Logo */}
                  <Logo />
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-self-center">
              <div
                ref={dropdownRef}
                className="h-12 flex items-center flex-row gap-4 relative border-white/55 bg-white/10 px-2 border rounded-3xl w-fit"
              >
                {/* Routes */}
                {navRoutes.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-center rounded-3xl transition-all duration-300"
                  >
                    <div
                      className={
                        "flex items-center p-2 px-4 rounded-3xl transition-all duration-300 " +
                        (item.submenu
                          ? "hover:bg-white/10 focus-within:bg-white/10"
                          : "hover:bg-white/10")
                      }
                    >
                      <Link
                        to={item.path}
                        className="text-sm text-white/90 hover:text-white"
                        onMouseEnter={() => setDropdownOpen(false)}
                        onClick={
                          item.openNav ? () => toggleDropdown(index) : null
                        }
                      >
                        {item.name}
                      </Link>

                      {item.submenu && (
                        <button
                          type="button"
                          onClick={() => toggleDropdown(index)}
                          className="ml-1 inline-flex items-center justify-center bg-transparent p-0 text-white/80 hover:text-white focus:outline-none"
                          aria-label={
                            dropdownOpen && activeDropdownIndex === index
                              ? "Close menu"
                              : "Open menu"
                          }
                        >
                          <KeyboardArrowDownRoundedIcon
                            sx={{ fontSize: 18 }}
                            className={
                              "transition-transform duration-200 " +
                              (dropdownOpen && activeDropdownIndex === index
                                ? "rotate-180"
                                : "rotate-0")
                            }
                          />
                        </button>
                      )}
                    </div>
                    {item.submenu && (
                      <div
                        className={
                          "absolute top-0 mt-10 w-44 bg-white/10 backdrop-blur-md border border-white/10 shadow-lg grid grid-cols-1 justify-items-center origin-top transform-gpu transition-all duration-200 ease-out " +
                          (dropdownOpen && activeDropdownIndex === index
                            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                            : "opacity-0 -translate-y-1 scale-[0.98] pointer-events-none")
                        }
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="w-full p-2 mx-auto flex justify-center text-sm text-white/90 hover:bg-white/10 hover:text-white transition-all"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex justify-self-end">
              <div className="h-12 flex items-center border border-white/55 px-2 bg-white/10 rounded-3xl cursor-pointer w-fit text-sm hover:bg-white/15 transition-all">
                <Link className="px-4 text-white/90 hover:text-white">
                  Marketplace
                </Link>
              </div>
            </div>

            <div className="absolute right-0 text-xl md:hidden">
              <MenuIcon
                onClick={() => dispatch(openModal())}
                className={
                  icon === "home"
                    ? "text-harvestaYellow"
                    : "text-harvestaLightGreen"
                }
                sx={{
                  fontSize: "40px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
