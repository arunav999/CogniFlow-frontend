// ========== IMPORT 3rd party ==========
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// ========== ELEMENTS ==========
import { ROLES } from "../utils/roles/roles";

// ========== ELEMENTS ==========
// Shared
import HomePage from "../components/Layout/HomePage";
import AuthPage from "../pages/Auth/AuthPage";

// Admin
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageTeamMembers from "../pages/Admin/Members/ManageTeamMembers";
import ManageWorkspaces from "../pages/Admin/Workspaces/ManageWorkspaces";

// Manager
import ManagerDashboard from "../pages/Manager/ManagerDashboard";
import ManageProjects from "../pages/Manager/ManageProjects";

// Developer
import DeveloperDashboard from "../pages/Dev/DeveloperDashboard";
import TicketsBoard from "../pages/Dev/TicketsBoard";

// Shared Tickets
import ViewTickets from "../pages/Shared/ViewTickets";
import TicketDetails from "../pages/Shared/TicketDetails";

// 404 | NotFound
import NotFound from "../pages/Error/NotFound";

// 401 | Unauthorized
import Unauthorized from "../pages/Error/Unauthorized";

// 403 | Forbidden
import Forbidden from "../pages/Error/Forbidden";

// ========== PROTECTED ROUTES ==========
import ProtectedRoute from "../pages/Auth/ProtectedRoute";

// ========== APP ROUTES ==========
const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* ========== Public Routes ========== */}
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* ========== Admin Routes ========== */}
          {/* DASHBOARD */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* MANAGE USERS */}
          <Route
            path="/admin/manage-users"
            element={
              <ProtectedRoute>
                <ManageTeamMembers />
              </ProtectedRoute>
            }
          />
          {/* MANAGE WORKSPACES */}
          <Route
            path="/admin/workspaces"
            element={
              <ProtectedRoute>
                <ManageWorkspaces />
              </ProtectedRoute>
            }
          />

          {/* ========== Manager Routes ========== */}
          {/* DASHBOARD */}
          <Route
            path="/manager"
            element={
              <ProtectedRoute>
                <ManagerDashboard />
              </ProtectedRoute>
            }
          />
          {/* MANAGE PROJECTS */}
          <Route
            path="/manager/projects"
            element={
              <ProtectedRoute allowedRoles={[ROLES.MANAGER, ROLES.ADMIN]}>
                <ManageProjects />
              </ProtectedRoute>
            }
          />

          {/* ========== Developer Routes ========== */}
          {/* DASHBOARD */}
          <Route
            path="/developer"
            element={
              <ProtectedRoute>
                <DeveloperDashboard />
              </ProtectedRoute>
            }
          />
          {/* TICKETS BOARD */}
          <Route
            path="/developer/tickets"
            element={
              <ProtectedRoute
                allowedRoles={[ROLES.DEVELOPER, ROLES.MANAGER, ROLES.ADMIN]}
              >
                <TicketsBoard />
              </ProtectedRoute>
            }
          />

          {/* ========== Shared Tickets Routes ========== */}
          {/* VIEW TICKETS */}
          <Route
            path="/tickets"
            element={
              <ProtectedRoute
                allowedRoles={[ROLES.DEVELOPER, ROLES.MANAGER, ROLES.ADMIN]}
              >
                <ViewTickets />
              </ProtectedRoute>
            }
          />

          {/* TICKET DETAILS */}
          <Route
            path="/tickets/:ticketId"
            element={
              <ProtectedRoute
                allowedRoles={[ROLES.DEVELOPER, ROLES.MANAGER, ROLES.ADMIN]}
              >
                <TicketDetails />
              </ProtectedRoute>
            }
          />

          {/* ========== Error Routes ========== */}
          {/* Not found */}
          <Route path="*" element={<NotFound />} />

          {/* Unauthorized */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Forbidden */}
          <Route path="/forbidden" element={<Forbidden />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
