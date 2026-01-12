import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IntercomProvider } from "react-use-intercom";
import App from "./App.jsx";
import { ModalProvider } from "./contexts/ModalContext";
import { Environment } from "./config/env.config.js";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <IntercomProvider appId={Environment.INTERCOM_APP_ID} autoBoot>
          <App />
        </IntercomProvider>
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>
);
