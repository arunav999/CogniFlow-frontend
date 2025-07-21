const ADMIN = "/admin";
const USERS = "/u";

export const ROUTE_NAMES = {
  // ADMIN ROUTES
  ADMIN: {
    DASHBOARD: `${ADMIN}`,
    WORKSPACES: `${ADMIN}/workspaces`,
    PROJECTS: `${ADMIN}/projects`,
    TICKETS: `${ADMIN}/tickets`,
    MANAGE_USERS: `${ADMIN}/manage-users`,
  },
  // USER'S ROUTES
  USERS: {
    DASHBOARD: `${USERS}`,
    WORKSPACE: `${USERS}/workspace`,
    PROJECT: `${USERS}/project`,
    TICKET: `${USERS}/ticket`,
  },
};
