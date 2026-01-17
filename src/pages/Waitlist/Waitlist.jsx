import "./Waitlist.css";
import { useEffect, useState } from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Heart,
  ExternalLink,
  Check,
  ChevronDown,
} from "lucide-react";
import { Leaf1, Leaf2, Leaf3, Leaf4, Logo } from "./Assets";
import toast, { Toaster } from "react-hot-toast";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

// Constants
const API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxM4TChzqrcG8_X4T16t-eVTgTkGqcJexPihwPqw6V5YShoNyMo29Tb1pjwpxYUTioO2A/exec";
const CATEGORIES = [
  "Customer",
  "Livestock Farmer",
  "Crop Farmer",
  "Supplier",
  "Processor",
  "Agri-Input Vendor",
];

const FLOATING_LEAVES = [
  {
    Component: Leaf1,
    className: "top-20 sm:top-40 left-4 sm:left-16 lg:left-32",
    animationDelay: "0s",
    animationDuration: "3s",
  },
  {
    Component: Leaf2,
    className: "bottom-20 sm:bottom-10 left-6 sm:left-20 lg:left-40",
    animationDelay: "1s",
    animationDuration: "4s",
  },
  {
    Component: Leaf3,
    className: "top-12 sm:top-24 right-4 sm:right-20 lg:right-96",
    animationDelay: "0.5s",
    animationDuration: "3.5s",
  },
  {
    Component: Leaf4,
    className: "bottom-40 sm:bottom-60 right-2 sm:right-10 lg:right-20",
    animationDelay: "2s",
    animationDuration: "5s",
  },
];

const SOCIAL_ICONS = [
  {
    Icon: Facebook,
    key: "facebook",
    href: "https://www.facebook.com/share/1BKct6DEEh/",
  },
  {
    Icon: FaXTwitter,
    key: "twitter",
    href: "https://x.com/havestahq?t=8MyC1z0ALuVRowpor-naMg&s=09",
  },
  {
    Icon: Linkedin,
    key: "linkedin",
    href: "https://www.linkedin.com/company/havesta/",
  },
  {
    Icon: FaTiktok,
    key: "tiktok",
    href: "https://www.tiktok.com/@havestahq?is_from_webapp=1&sender_device=pc",
  },
  {
    Icon: Instagram,
    key: "instagram",
    href: "https://www.instagram.com/havestahq?igsh=cTN0bHVyNjUxeDh1",
  },
];

// Toast configuration
const getToastConfig = () => ({
  position: window.innerWidth >= 768 ? "top-right" : "top-center",
  toastOptions: {
    duration: 5000,
    style: {
      margin: "8px",
      borderRadius: "12px",
      padding: "16px 20px",
      fontSize: "0.875rem",
      fontWeight: "500",
      maxWidth: window.innerWidth >= 768 ? "400px" : "calc(100vw - 32px)",
      width: "auto",
      minWidth: window.innerWidth >= 768 ? "320px" : "280px",
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    success: {
      style: {
        background: "#dcfce7",
        color: "#065f46",
        border: "1px solid #4ade80",
      },
      iconTheme: {
        primary: "#4ade80",
        secondary: "#dcfce7",
      },
    },
    error: {
      style: {
        background: "#fee2e2",
        color: "#991b1b",
        border: "1px solid #f87171",
      },
      iconTheme: {
        primary: "#f87171",
        secondary: "#fee2e2",
      },
    },
  },
  containerStyle:
    window.innerWidth >= 768
      ? { top: 20, right: 20 }
      : { top: 20, left: 16, right: 16 },
});

// Components
const FloatingLeaves = () => (
  <div className="absolute inset-0 pointer-events-none hidden sm:block">
    {FLOATING_LEAVES.map(
      ({ Component, className, animationDelay, animationDuration }, index) => (
        <div
          key={index}
          className={`absolute ${className} animate-bounce scale-50 sm:scale-75 lg:scale-100`}
          style={{ animationDelay, animationDuration }}
        >
          <Component />
        </div>
      ),
    )}
  </div>
);

const Header = () => (
  <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
    <div className="scale-75 sm:scale-90 lg:scale-100 origin-left">
      <Logo />
    </div>
  </header>
);

const CategorySelector = ({
  selectedCategories,
  onCategoryChange,
  isLoading,
  isDropdownOpen,
  onToggleDropdown,
}) => {
  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  return (
    <div className="relative dropdown-container">
      {/* Main select button */}
      <div className="relative">
        <button
          onClick={onToggleDropdown}
          disabled={isLoading}
          className={`w-full px-4 py-3 text-left bg-white rounded-lg transition-all duration-200 ${
            isDropdownOpen
              ? "ring-2 ring-green-400"
              : "hover:ring-2 hover:ring-green-200"
          } ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          <div className="flex items-center justify-between">
            <span
              className={
                selectedCategories.length > 0
                  ? "text-gray-800"
                  : "text-gray-500"
              }
            >
              {selectedCategories.length > 0
                ? `${selectedCategories.length} categor${
                    selectedCategories.length === 1 ? "y" : "ies"
                  } selected`
                : "Select your categories"}
            </span>
            <ChevronDown
              size={20}
              className={`text-gray-400 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 z-[60] mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            <div className="py-2">
              {CATEGORIES.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryToggle(category)}
                    disabled={isLoading}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors disabled:opacity-50"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={
                          isSelected
                            ? "text-green-700 font-medium"
                            : "text-gray-700"
                        }
                      >
                        {category}
                      </span>
                      {isSelected && (
                        <Check size={16} className="text-green-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-green-400 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

const WaitlistForm = ({
  email,
  onEmailChange,
  selectedCategories,
  onCategoryChange,
  onSubmit,
  isLoading,
  isDropdownOpen,
  onToggleDropdown,
}) => (
  <div className="space-y-6 max-w-md mx-auto">
    <div>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        disabled={isLoading}
        className="w-full px-4 py-3 rounded-lg border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>

    <CategorySelector
      selectedCategories={selectedCategories}
      onCategoryChange={onCategoryChange}
      isLoading={isLoading}
      isDropdownOpen={isDropdownOpen}
      onToggleDropdown={onToggleDropdown}
    />

    <button
      onClick={onSubmit}
      disabled={isLoading}
      className="w-[50%] m-auto bg-[#78EB54] text-green-900 py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#78EB54] flex items-center justify-center gap-2"
    >
      {isLoading ? (
        <>
          <div className="w-4 h-4 border-2 border-green-900 border-t-transparent rounded-full animate-spin"></div>
          Loading...
        </>
      ) : (
        "Notify Me"
      )}
    </button>

    {/* Social Media Icons */}
    <div className="flex gap-4 justify-center pt-6 text-white">
      {SOCIAL_ICONS.map(({ Icon, key, href }) => (
        <a target="_blank" rel="noopener noreferrer" href={href} key={key}>
          <Icon className="w-6 h-6 hover:text-green-400 cursor-pointer transition-colors" />{" "}
        </a>
      ))}
    </div>
  </div>
);

const MainContent = ({
  email,
  onEmailChange,
  selectedCategories,
  onCategoryChange,
  onSubmit,
  isLoading,
  isDropdownOpen,
  onToggleDropdown,
}) => (
  <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-8">
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-12 leading-tight">
        Get Notified When We&apos;re Launching
      </h1>

      <WaitlistForm
        email={email}
        onEmailChange={onEmailChange}
        selectedCategories={selectedCategories}
        onCategoryChange={onCategoryChange}
        onSubmit={onSubmit}
        isLoading={isLoading}
        isDropdownOpen={isDropdownOpen}
        onToggleDropdown={onToggleDropdown}
      />
    </div>
  </main>
);

const Footer = () => (
  <footer className="relative z-0 mt-auto">
    {/* Donate Section */}
    <div className="flex flex-col z-0 sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 pb-6">
      {/* Donate Button */}
      <a
        href="https://havesta.com/donation"
        className="group border border-green-600 hover:from-green-300 hover:to-green-400 text-green-400 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 group-hover:animate-pulse" />
        Support Our Mission
        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70" />
      </a>

      {/* Optional Separator for larger screens */}
      <div className="hidden sm:block w-px h-8 bg-green-300 opacity-30"></div>

      {/* Call-to-Action Text */}
      <p className="text-green-200 text-xs sm:text-sm text-center max-w-xs">
        Help us grow sustainable solutions for tomorrow
      </p>
    </div>

    {/* Copyright Footer */}
    <div className="border-t border-green-600 border-opacity-30 bg-black bg-opacity-20">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
        <p className="text-green-200 text-xs sm:text-sm text-center">
          © 2025 Havesta. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

// Custom hooks
const useClickOutside = (isOpen, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".dropdown-container")) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, callback]);
};

const useWaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useClickOutside(isDropdownOpen, () => setIsDropdownOpen(false));

  const validateForm = () => {
    if (!email) {
      toast.error("Please enter your email");
      return false;
    }

    if (!selectedCategories || selectedCategories.length === 0) {
      toast.error("Please select a category");
      return false;
    }

    return true;
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await fetch(API_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, category: selectedCategories }),
      });

      toast.success("Thank you! We'll notify you when we launch 🚀");
      setEmail("");
      setSelectedCategories([]);
    } catch (err) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return {
    email,
    setEmail,
    selectedCategories,
    setSelectedCategories,
    isLoading,
    isDropdownOpen,
    submitForm,
    toggleDropdown,
  };
};

// Main component
const Waitlist = () => {
  const {
    email,
    setEmail,
    selectedCategories,
    setSelectedCategories,
    isLoading,
    isDropdownOpen,
    submitForm,
    toggleDropdown,
  } = useWaitlistForm();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,#005231,#273F2B)] relative overflow-hidden flex flex-col">
      <Toaster {...getToastConfig()} />

      <FloatingLeaves />
      <Header />

      <MainContent
        email={email}
        onEmailChange={setEmail}
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
        onSubmit={submitForm}
        isLoading={isLoading}
        isDropdownOpen={isDropdownOpen}
        onToggleDropdown={toggleDropdown}
      />

      <Footer />
    </div>
  );
};

export default Waitlist;
