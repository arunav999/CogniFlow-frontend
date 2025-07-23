// ========== IMPORT 3rd party ==========
import { createBrowserRouter } from "react-router-dom";

// ========== COMPONENTS ==========
// Home page
import HomePage from "../components/Layout/LandingPage/HomePage";

// Auth page
import AuthPage from "../pages/Auth/AuthPage";

// Common dashboard layput
import DashboardLaout from "../components/Layout/Dashboard/DashboardLaout";

// Public Routes
import PublicRoute from "../pages/PublicRoute";

// Protected Routes
import ProtectedRoute from "../pages/Auth/ProtectedRoute";

// Private pages
import Dashboard from "../pages/Protected/Dashboard";
import Workspaces from "../pages/Protected/Workspaces/Workspaces";
import Projects from "../pages/Protected/Projects/Projects";
import Tickets from "../pages/Protected/Tickets/Tickets";
import ManageUsers from "../pages/Protected/ManageUsers";

// Dynamic pages
import WorkspaceDetails from "../pages/Protected/Workspaces/WorkspaceDetails";
import ProjectDetails from "../pages/Protected/Projects/ProjectDetails";
import TicketDetails from "../pages/Protected/Tickets/TicketDetails";

// Error pages
import ErrorPage from "../pages/Error/ErrorPage";
import NotFound from "../pages/Error/NotFound";
import Unauthorized from "../pages/Error/Unauthorized";
import Forbidden from "../pages/Error/Forbidden";

// ========== DEFINING APP ROUTES ==========
const router = createBrowserRouter([
  // ===== PUBLIC ROUTES =====
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
    ],
  },

  // ===== PROTECTED ROUTES =====
  {
    element: <ProtectedRoute allowedRoles={["admin"]} />,
    children: [
      // ===== PRIVATE ROUTES =====
      // COMMON DASHBOARD LAYOUT
      {
        // Admin routes
        path: "/admin",
        element: <DashboardLaout />,
        // Loder for auth
        children: [
          // Static Routes
          { index: true, element: <Dashboard /> },
          { path: "workspaces", element: <Workspaces /> },
          { path: "projects", element: <Projects /> },
          { path: "tickets", element: <Tickets /> },
          { path: "manage-users", element: <ManageUsers /> },

          // Dynamic Routes
          { path: "workspace/:id", element: <WorkspaceDetails /> },
          { path: "project/:id", element: <ProjectDetails /> },
          { path: "ticket/:id", element: <TicketDetails /> },
        ],
      },
    ],
  },

  // this will come later - first admin
  // {
  //   // RABC based on role
  //   path: "/u",
  //   element: <DashboardLaout />,
  //   // loader to add authentication
  //   children: [
  //     { index: true, element: <Dashboard /> },
  //     { path: "workspace", element: <Workspaces /> },
  //     { path: "project", element: <Projects /> },
  //     { path: "ticket", element: <Tickets /> },
  //   ],
  // },

  // ===== ERROR ROUTES =====
  // Not found
  { path: "*", element: <NotFound /> },

  // Unauthorized
  { path: "/401-unauthorized", element: <Unauthorized /> },

  // Forbidden
  { path: "/403-forbidden", element: <Forbidden /> },
]);

export default router;
