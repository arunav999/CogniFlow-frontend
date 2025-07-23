// ==================== Route Path Constants ====================
// Base paths for admin and user routes
const ADMIN = "/admin";
const USERS = "/u";

// ==================== Route Names Mapping ====================
// Centralized object for all route paths, organized by user role and purpose
export const ROUTE_NAMES = {
  // ==================== Admin Routes ====================
  ADMIN: {
    DASHBOARD: `${ADMIN}`, // Admin dashboard
    WORKSPACES: `${ADMIN}/workspaces`, // Admin workspaces management
    PROJECTS: `${ADMIN}/projects`, // Admin projects management
    TICKETS: `${ADMIN}/tickets`, // Admin tickets management
    MANAGE_USERS: `${ADMIN}/manage-users`, // User management
  },
  // ==================== User Routes ====================
  USERS: {
    DASHBOARD: `${USERS}`, // User dashboard
    WORKSPACE: `${USERS}/workspace`, // User workspace
    PROJECT: `${USERS}/project`, // User project
    TICKET: `${USERS}/ticket`, // User ticket
  },
};
