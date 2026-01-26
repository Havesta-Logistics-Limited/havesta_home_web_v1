import { useState, useEffect } from "react";
import { IoChatbubblesOutline, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Always hide the default Tawk.to widget on mount
    let interval;
    function hideTawk() {
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
        setIsLoaded(true);
        clearInterval(interval);
      }
    }
    if (window.Tawk_API) {
      hideTawk();
      if (window.Tawk_API.onLoad) {
        window.Tawk_API.onLoad = hideTawk;
      }
    } else {
      interval = setInterval(hideTawk, 1000);
    }
    return () => clearInterval(interval);
  }, []);

  // Open chat: show widget, set open state
  const openChat = () => {
    if (window.Tawk_API && typeof window.Tawk_API.showWidget === "function") {
      window.Tawk_API.showWidget();
      setIsOpen(true);
    }
  };

  // Close chat: hide widget, set closed state
  const closeChat = () => {
    if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
      window.Tawk_API.hideWidget();
      setIsOpen(false);
    }
  };

  // If not loaded yet, don't show anything or show a loader state
  if (!isLoaded) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center"
      style={{ pointerEvents: "none" }}
    >
      <div className="relative" style={{ pointerEvents: "auto" }}>
        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-harvestaLightGreen opacity-20 animate-ping"></span>

        <motion.button
          onClick={isOpen ? closeChat : openChat}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          title={isOpen ? "Close chat" : "Chat with us"}
          className="relative group flex items-center justify-center w-16 h-16 rounded-full shadow-2xl border-0 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300"
          style={{
            background:
              "radial-gradient(circle at 30% 110%, #01BE72 0%, #FFC141 100%)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          }}
        >
          {/* Shine Effect */}
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine transition-all duration-700" />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoClose className="text-white text-3xl drop-shadow-lg" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoChatbubblesOutline className="text-white text-3xl drop-shadow-lg" />
              </motion.div>
            )}
          </AnimatePresence>
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {isOpen ? "Close chat" : "Chat with us!"}
          </span>
        </motion.button>
      </div>
      {/* Mobile responsiveness: smaller button on small screens */}
      <style>{`
        @media (max-width: 640px) {
          .group.w-16.h-16 { width: 48px !important; height: 48px !important; }
          .text-3xl { font-size: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
};

export default ChatWidget;
