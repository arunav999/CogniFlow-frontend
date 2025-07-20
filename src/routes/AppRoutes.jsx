// ========== IMPORT 3rd party ==========
import { createBrowserRouter } from "react-router-dom";

// ========== COMPONENTS ==========
// Home page
import HomePage from "../components/Layout/LandingPage/HomePage";

// Auth page
import AuthPage from "../pages/Auth/AuthPage";

// Error pages
import NotFound from "../pages/Error/NotFound";
import Unauthorized from "../pages/Error/Unauthorized";
import Forbidden from "../pages/Error/Forbidden";

// ========== DEFINING APP ROUTES ==========
const router = createBrowserRouter([
  // ===== PUBLIC ROUTES =====
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },

  // ===== PRIVATE ROUTES =====
]);

export default router;
