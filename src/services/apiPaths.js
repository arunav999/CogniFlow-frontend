// ==================== API BASE URL ====================
// The base URL for all backend API requests, loaded from environment variables
export const BASE_URL = import.meta.env.VITE_COGNIFLOW_BACKEND_URL;

// ==================== API PATH CONSTANTS ====================
// Common API prefix for all endpoints
const API_COMMON = "/api/v1";

// Specific endpoint roots for each resource
const API_AUTH = `${API_COMMON}/auth`;
const API_UPLOAD = `${API_COMMON}/upload`;
const API_WORKSPACE = `${API_COMMON}/workspace`;
const API_PROJECT = `${API_COMMON}/project`;
const API_TICKET = `${API_COMMON}/ticket`;
const API_DASHBOARD = `${API_COMMON}/dashboard`;

// ==================== API PATHS OBJECT ====================
// Centralized object for all API endpoint paths, grouped by resource
export const API_PATHS = {
  AUTH: {
    REGISTER: `${API_AUTH}/register`, // Register a new user
    LOGIN: `${API_AUTH}/login`, // Login endpoint
    CHECK_EMAIL: `${API_AUTH}/check-email`, // Check if email exists
    GET_USER_INFO: `${API_AUTH}/getUser`, // Get current user info
    GET_USER_BY_ID: (id) => `${API_AUTH}/getUser/${id}`, // Get user info by id
    LOGOUT: `${API_AUTH}/logout`, // Logout endpoint
  },
  UPLOAD: {
    PROFILE_PIC: `${API_UPLOAD}/avatar`, // Upload user profile picture
  },
  WORKSPACE: {
    CREATE: `${API_WORKSPACE}/`, // Create workspace
    GET_ALL: `${API_WORKSPACE}/`, // Get all workspaces
    GET_BY_ID: (id) => `${API_WORKSPACE}/${id}`, // Get a workspace by id
    PATCH_BY_ID: (id) => `${API_WORKSPACE}/${id}`, // Patch a workspace by id
    DELETE_BY_ID: (id) => `${API_WORKSPACE}/${id}`, // Delete a workspace by id
  },
  PROJECT: {
    CREATE: (id) => `${API_PROJECT}/workspace/${id}`, // Create project by workspace
    GET_ALL: (id) => `${API_PROJECT}/workspace/${id}`, // Get all projects by workspace
    GET_BY_ID: (id) => `${API_PROJECT}/${id}`, // Get a project by id
    PATCH_BY_ID: (id) => `${API_PROJECT}/${id}`, // Patch a project by id
    DELETE_BY_ID: (id) => `${API_PROJECT}/${id}`, // Delete a project by id
  },
  TICKET: {
    CREATE: (id) => `${API_TICKET}/project/${id}`, // Create ticket by project
    GET_ALL: (id) => `${API_TICKET}/project/${id}`, // Get all tickets by project
    GET_BY_ID: (id) => `${API_TICKET}/${id}`, // Get a ticket by id
    PATCH_BY_ID: (id) => `${API_TICKET}/${id}`, // Patch a ticket by id
    DELETE_BY_ID: (id) => `${API_TICKET}/${id}`, // Delete a ticket by id
  },
  DASHBOARD: {
    GET_DASHBOARD: `${API_DASHBOARD}/`, // Get dashboard data
  },
};
