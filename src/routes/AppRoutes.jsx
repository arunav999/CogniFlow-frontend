// ========== IMPORT ==========
import { useState, useEffect } from "react";

// ========== IMPORT 3rd party ==========
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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

// ========== PROTECTED ROUTES ==========
const ProtectedRoute = ({ children }) => {
  return children; // replace with auth logic later
};

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
              <ProtectedRoute>
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
              <ProtectedRoute>
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
              <ProtectedRoute>
                <TicketsBoard />
              </ProtectedRoute>
            }
          />

          {/* ========== Shared Tickets Routes ========== */}
          {/* VIEW TICKETS */}
          <Route
            path="/tickets"
            element={
              <ProtectedRoute>
                <ViewTickets />
              </ProtectedRoute>
            }
          />

          {/* TICKET DETAILS */}
          <Route
            path="/tickets/:ticketId"
            element={
              <ProtectedRoute>
                <TicketDetails />
              </ProtectedRoute>
            }
          />

          {/* Not found */}
          <Route path="*" element={<NotFound />} />
          {/* <Route /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
