import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Custom context
import { ActiveSectionProvider } from "./context/ActiveSectionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ActiveSectionProvider>
        <App />
      </ActiveSectionProvider>
    </BrowserRouter>
  </StrictMode>
);
