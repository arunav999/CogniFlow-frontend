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
import Workspaces from "../pages/Protected/Workspaces/Workspaces";
import WorkspaceDetails from "../pages/Protected/Workspaces/WorkspaceDetails";
import Projects from "../pages/Protected/Projects/Projects";
import ProjectDetails from "../pages/Protected/Projects/ProjectDetails";
import Tickets from "../pages/Protected/Tickets/Tickets";
import TicketDetails from "../pages/Protected/Tickets/TicketDetails";
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
    // Admin routes
    path: "/admin",
    element: <DashboardLaout />,
    // lodaer to add for authentication
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
  {
    // RABC based on role
    path: "/u",
    element: <DashboardLaout />,
    // loader to add authentication
    children: [
      { index: true, element: <Dashboard /> },
      { path: "workspace", element: <Workspaces /> },
      { path: "project", element: <Projects /> },
      { path: "ticket", element: <Tickets /> },
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
