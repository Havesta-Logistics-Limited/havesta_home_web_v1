import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ModalProvider } from "./contexts/ModalContext";
import { Environment } from "./config/env.config.js";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function IntercomLazyProvider({ children }) {
  const [Provider, setProvider] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadProvider = () => {
      import("react-use-intercom").then((mod) => {
        if (!cancelled) {
          setProvider(() => mod.IntercomProvider);
        }
      });
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(loadProvider);
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(id);
      };
    }

    const timeoutId = window.setTimeout(loadProvider, 1500);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  if (!Provider) return children;

  return (
    <Provider appId={Environment.INTERCOM_APP_ID} autoBoot>
      {children}
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <IntercomLazyProvider>
          <App />
        </IntercomLazyProvider>
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>,
);
