import { Link } from "react-router-dom";
import navRoutes from "../../routes/navRoutes.jsx";
import { useEffect, useRef, useState } from "react";
import Logo from "../Logo.jsx";
import MobileToggle from "../../components/MobileToggle.jsx";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function Navbar() {
  const navRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  function toggleDropdown(index) {
    if (activeDropdownIndex === index) {
      // If clicking the same dropdown, toggle it
      setDropdownOpen(!dropdownOpen);
      if (dropdownOpen) {
        setActiveDropdownIndex(null);
      }
    } else {
      // If clicking a different dropdown, open it
      setDropdownOpen(true);
      setActiveDropdownIndex(index);
    }
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

  // Publish the navbar's real rendered height as --nav-h on :root.
  // This lets specific pages/sections offset content cleanly without guessing.
  useEffect(() => {
    const el = navRef.current;

    function setNavH() {
      if (!el) return;
      document.documentElement.style.setProperty(
        "--nav-h",
        `${el.offsetHeight}px`,
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
    <div
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full font-primary text-white"
    >
      <div
        className={
          "px-6 py-4 transition-all duration-300 " +
          (scrolled
            ? "bg-[#0B3B25]/15 backdrop-blur-sm border-white/10 shadow-[0_1px_12px_rgba(0,0,0,0.25)]"
            : "bg-transparent")
        }
      >
        <div className="py-3 md:px-10">
          <div className="grid grid-cols-3 items-center max-w-6xl m-auto relative">
            <div className="justify-self-start">
              <div className="h-12 flex items-center rounded-3xl border border-white/55 bg-white/10 hover:bg-white/15 transition-all min-[1000px]:border min-[1000px]:px-4 min-[1000px]:bg-white/10 max-[1000px]:border-0 max-[1000px]:px-0 max-[1000px]:bg-transparent">
                <Link to={"/"} className="flex items-center gap-2 px-3 sm:px-4">
                  {/* Logo */}
                  <Logo />
                </Link>
              </div>
            </div>

            <div className="hidden min-[1000px]:flex justify-self-center">
              <div
                ref={dropdownRef}
                className="h-12 flex items-center flex-row gap-2 lg:gap-4 relative border-white/55 bg-white/10 px-2 border rounded-3xl w-fit"
              >
                {/* Routes */}
                {navRoutes.map((item, index) => (
                  <div key={index} className="relative">
                    {item.submenu ? (
                      <div className="relative">
                        <div className="rounded-3xl transition-all duration-300 hover:bg-white/10">
                          <button
                            type="button"
                            onClick={() => toggleDropdown(index)}
                            className="flex items-center justify-center w-full p-1 px-4 h-10 text-sm lg:text-base text-white/90 hover:text-white focus:outline-none"
                          >
                            {item.name}
                            <KeyboardArrowDownRoundedIcon
                              sx={{ fontSize: 18 }}
                              className={
                                "ml-1 transition-transform duration-200 " +
                                (dropdownOpen && activeDropdownIndex === index
                                  ? "rotate-180"
                                  : "rotate-0")
                              }
                            />
                          </button>
                        </div>

                        {dropdownOpen && activeDropdownIndex === index && (
                          <div className="absolute top-12 right-0 space-y-2 z-10 opacity-0 translate-y-[-10px] animate-[fadeInUp_0.3s_ease-out_forwards]">
                            {item.submenu.map((subItem, subIndex) => (
                              <div
                                key={subIndex}
                                className="opacity-0 translate-y-[-5px]"
                                style={{
                                  animation: `fadeInUp 0.2s ease-out ${subIndex * 0.1}s forwards`
                                }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="block w-max p-2 px-4 text-center text-sm text-white/90 hover:text-white bg-white/10 backdrop-blur-md border border-white/55 rounded-3xl hover:bg-white/15 transition-all duration-200 hover:scale-105 transform ml-auto"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center p-1 px-4 rounded-3xl transition-all duration-300 hover:bg-white/10">
                        <Link
                          to={item.path}
                          className="text-sm lg:text-base text-white/90 hover:text-white"
                          onMouseEnter={() => setDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden min-[1000px]:flex justify-self-end">
              <div className="h-12 flex items-center border border-white/55 px-2 bg-white/10 rounded-3xl cursor-pointer w-fit text-sm hover:bg-white/15 transition-all">
                <Link
                  to="/"
                  className="px-4 text-sm lg:text-base text-white/90 hover:text-white"
                >
                  Marketplace
                </Link>
              </div>
            </div>

            <div className="absolute right-0 min-[1000px]:hidden">
              <MobileToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
