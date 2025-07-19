// Base URL
export const BASE_URL = import.meta.env.VITE_COGNIFLOW_BACKEND_URL;

// Common API Paths
const API_COMMON = "/api/v1";

// API Path for Authentication
const API_AUTH = `${API_COMMON}/auth`;

// API Path for Upload
const API_UPLOAD = `${API_COMMON}/upload`;

// API Path for Workspace
const API_WORKSPACE = `${API_COMMON}/workspace`;

// API Path for Project
const API_PROJECT = `${API_COMMON}/project`;

// API Path for Ticket
const API_TICKET = `${API_COMMON}/ticket`;

// API Path for Dashboard
const API_DASHBOARD = `${API_COMMON}/dashboard`;

export const API_PATHS = {
  AUTH: {
    REGISTER: `${API_AUTH}/register`,
    LOGIN: `${API_AUTH}/login`,
    CHECK_EMAIL: `${API_AUTH}/check-email`,
    GET_USER_INFO: `${API_AUTH}/getUser`,
    LOGOUT: `${API_AUTH}/logout`,
  },
  UPLOAD: {
    PROFILE_PIC: `${API_UPLOAD}/avatar`,
  },
  WORKSPACE: {
    CREATE: `${API_WORKSPACE}/`,
    GET_ALL: `${API_WORKSPACE}/`,
    GET_BY_ID: (id) => `${API_WORKSPACE}/${id}`,
    PATCH_BY_ID: (id) => `${API_WORKSPACE}/${id}`,
    DELETE_BY_ID: (id) => `${API_WORKSPACE}/${id}`,
  },
  PROJECT: {
    CREATE: `${API_PROJECT}/`,
    GET_ALL: `${API_PROJECT}/`,
    GET_BY_ID: (id) => `${API_PROJECT}/${id}`,
    PATCH_BY_ID: (id) => `${API_PROJECT}/${id}`,
    DELETE_BY_ID: (id) => `${API_PROJECT}/${id}`,
  },
  TICKET: {
    CREATE: `${API_TICKET}/`,
    GET_ALL: `${API_TICKET}/`,
    GET_BY_ID: (id) => `${API_TICKET}/${id}`,
    PATCH_BY_ID: (id) => `${API_TICKET}/${id}`,
    DELETE_BY_ID: (id) => `${API_TICKET}/${id}`,
  },
  DASHBOARD: {
    GET_DASHBOARD: `${API_DASHBOARD}/`,
  },
};
