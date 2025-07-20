// ========== IMPORT 3rd party ==========
import { createBrowserRouter } from "react-router-dom";

// ========== COMPONENTS ==========
// Home page
import HomePage from "../components/Layout/LandingPage/HomePage";

// Auth page
import AuthPage from "../pages/Auth/AuthPage";

// Common dashboard layput
import DashboardLaout from "../components/Layout/Dashboard/DashboardLaout";

// Private pages
import Dashboard from "../pages/Protected/Dashboard";
import Workspaces from "../pages/Protected/Workspaces";
import Projects from "../pages/Protected/Projects";
import Tickets from "../pages/Protected/Tickets";
import ManageUsers from "../pages/Protected/ManageUsers";

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
  // COMMON DASHBOARD LAYOUT
  {
    path: "/admin",
    element: <DashboardLaout />,
    // lodaer to add for authentication
    children: [
      { index: true, element: <Dashboard /> },
      { path: "workspaces", element: <Workspaces /> },
      { path: "projects", element: <Projects /> },
      { path: "tickets", element: <Tickets /> },
      { path: "manage-users", element: <ManageUsers /> },
    ],
  },

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
