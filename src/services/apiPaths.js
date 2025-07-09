// Base URL
export const BASE_URL = import.meta.env.VITE_COGNIFLOW_BACKEND_URL;

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/v1/auth/register",
    LOGIN: "/api/v1/auth/login",
    GET_USER_INFO: "/api/v1/auth/getUser",
  },
};
