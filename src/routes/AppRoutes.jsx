// ========== IMPORT 3rd party ==========
import { createBrowserRouter } from "react-router-dom";

// ========== COMPONENTS ==========
// Home page
import HomePage from "../components/Layout/LandingPage/HomePage";

// Auth page
import AuthPage from "../pages/Auth/AuthPage";

// Error pages
import ErrorPage from "../pages/Error/ErrorPage";

// ========== DEFINING APP ROUTES ==========
const router = createBrowserRouter([
  // ===== PUBLIC ROUTES =====
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },

  // ===== PRIVATE ROUTES =====

  // ===== CENTRALIZED ERROR ROUTES =====
  {
    path: "*",
    loader: () => {
      throw new Response("Not Found", { status: 404 });
    },
    errorElement: <ErrorPage />,
  },
]);

export default router;
