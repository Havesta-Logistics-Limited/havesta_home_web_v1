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

    // MutationObserver to remove any Tawk.to widget elements from all roots
    function removeTawkFromRoot(root) {
      const selectors = [
        "#tawk-bubble",
        ".tawk-min-container",
        ".tawk-button",
        ".tawk-widget",
        'iframe[src*="tawk.to"]',
      ];
      selectors.forEach((sel) => {
        root.querySelectorAll(sel).forEach((el) => {
          el.parentNode && el.parentNode.removeChild(el);
        });
      });
      // Remove from shadow roots
      root.querySelectorAll("*").forEach((el) => {
        if (el.shadowRoot) {
          removeTawkFromRoot(el.shadowRoot);
        }
      });
    }

    const observer = new MutationObserver(() => {
      removeTawkFromRoot(document.documentElement);
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    // Initial cleanup
    removeTawkFromRoot(document.documentElement);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  // Custom widget removed. Default Tawk.to widget will be shown.
  const openChat = () => {
