// ==================== 3rd-party Imports ====================
// React core and DOM rendering
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ==================== Global Styles ====================
// Main CSS file for global styles
import "./index.css";

// ==================== Main App Component ====================
// Root application component
import App from "./App.jsx";

// ==================== App Bootstrap ====================
// Mount the React app to the DOM with strict mode enabled
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
