import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { IntercomProvider } from "react-use-intercom";
import App from "./App.jsx";
import store from "./redux/store.js";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <IntercomProvider appId={"d7aozhso"} autoBoot>
          <App />
        </IntercomProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
