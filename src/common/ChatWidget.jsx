import { useState, useEffect } from "react";
import { IoChatbubblesOutline, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if Tawk is already loaded
    if (window.Tawk_API) {
      setIsLoaded(true);
      window.Tawk_API.onLoad = function () {
        window.Tawk_API.hideWidget();
        setIsLoaded(true);
      };
      // If already loaded before we attached listener
      if (window.Tawk_API.status === 'online' || window.Tawk_API.status === 'offline') {
         window.Tawk_API.hideWidget();
      }
    }

    // Interval to keep checking until loaded (fallback)
    const interval = setInterval(() => {
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
        setIsLoaded(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
      setIsOpen(!isOpen);
    }
  };

  // If not loaded yet, don't show anything or show a loader state
  if (!isLoaded) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center">
      {/* Pulse Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-harvestaLightGreen opacity-20 animate-ping"></span>
      
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-16 h-16 rounded-full shadow-2xl backdrop-blur-md border border-white/20 overflow-hidden transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #01BE72 0%, #FFC141 100%)",
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
              <IoClose className="text-white text-3xl" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoChatbubblesOutline className="text-white text-3xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatWidget;
