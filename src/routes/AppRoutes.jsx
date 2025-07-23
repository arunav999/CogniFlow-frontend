// ==================== 3rd PARTY IMPORTS ====================
// Importing React Router for SPA navigation and route management
import { createBrowserRouter } from "react-router-dom";

// ==================== COMPONENT IMPORTS ====================
// Home/Landing page
import HomePage from "../components/Layout/LandingPage/HomePage";
// Authentication page
import AuthPage from "../pages/Auth/AuthPage";
// Dashboard layout for admin area
import DashboardLaout from "../components/Layout/Dashboard/DashboardLaout";
// Route guards for public and protected routes
import PublicRoute from "../pages/PublicRoute";
import ProtectedRoute from "../pages/Auth/ProtectedRoute";
// Private (admin) pages
import Dashboard from "../pages/Protected/Dashboard";
import Workspaces from "../pages/Protected/Workspaces/Workspaces";
import Projects from "../pages/Protected/Projects/Projects";
import Tickets from "../pages/Protected/Tickets/Tickets";
import ManageUsers from "../pages/Protected/ManageUsers";
// Dynamic detail pages
import WorkspaceDetails from "../pages/Protected/Workspaces/WorkspaceDetails";
import ProjectDetails from "../pages/Protected/Projects/ProjectDetails";
import TicketDetails from "../pages/Protected/Tickets/TicketDetails";
// Error pages for fallback and access control
import NotFound from "../pages/Error/NotFound";
import Unauthorized from "../pages/Error/Unauthorized";
import Forbidden from "../pages/Error/Forbidden";

// ==================== ROUTER CONFIGURATION ====================
// Main application router: defines all public, protected, and error routes
const router = createBrowserRouter([
  // ----------- PUBLIC ROUTES (Accessible to all users) -----------
  {
    element: <PublicRoute />, // Wrapper for public routes
    children: [
      {
        path: "/",
        element: <HomePage />, // Home/Landing page
      },
      {
        path: "/auth",
        element: <AuthPage />, // Authentication (login/signup)
      },
    ],
  },

  // ----------- PROTECTED ROUTES (Require authentication & role) -----------
  {
    element: <ProtectedRoute allowedRoles={["admin"]} />, // Only admin users
    children: [
      // ---- ADMIN DASHBOARD LAYOUT ----
      {
        path: "/admin",
        element: <DashboardLaout />, // Main dashboard layout
        children: [
          // ---- STATIC ADMIN PAGES ----
          { index: true, element: <Dashboard /> }, // Dashboard home
          { path: "workspaces", element: <Workspaces /> },
          { path: "projects", element: <Projects /> },
          { path: "tickets", element: <Tickets /> },
          { path: "manage-users", element: <ManageUsers /> },

          // ---- DYNAMIC DETAIL PAGES ----
          { path: "workspace/:id", element: <WorkspaceDetails /> },
          { path: "project/:id", element: <ProjectDetails /> },
          { path: "ticket/:id", element: <TicketDetails /> },
        ],
      },
    ],
  },

  // ----------- ERROR & FALLBACK ROUTES -----------
  { path: "*", element: <NotFound /> }, // 404 Not Found
  { path: "/401-unauthorized", element: <Unauthorized /> }, // 401 Unauthorized
  { path: "/403-forbidden", element: <Forbidden /> }, // 403 Forbidden
]);


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

// ==================== EXPORT ROUTER ====================
export default router;
