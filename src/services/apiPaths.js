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
    GET_BY_ID: (id) => `${API_WORKSPACE}/${id}`,
    PATCH_BY_ID: (id) => `${API_WORKSPACE}/${id}`,
    DELETE_BY_ID: (id) => `${API_WORKSPACE}/${id}`,
  },
  PROJECT: {
    CREATE: `${API_PROJECT}/`, // Create project
    GET_ALL: `${API_PROJECT}/`, // Get all projects
    GET_BY_ID: (id) => `${API_PROJECT}/${id}`,
    PATCH_BY_ID: (id) => `${API_PROJECT}/${id}`,
    DELETE_BY_ID: (id) => `${API_PROJECT}/${id}`,
  },
  TICKET: {
    CREATE: `${API_TICKET}/`, // Create ticket
    GET_ALL: `${API_TICKET}/`, // Get all tickets
    GET_BY_ID: (id) => `${API_TICKET}/${id}`,
    PATCH_BY_ID: (id) => `${API_TICKET}/${id}`,
    DELETE_BY_ID: (id) => `${API_TICKET}/${id}`,
  },
  DASHBOARD: {
    GET_DASHBOARD: `${API_DASHBOARD}/`, // Get dashboard data
  },
};
