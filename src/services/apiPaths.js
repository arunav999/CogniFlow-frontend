// Base URL
export const BASE_URL = import.meta.env.VITE_COGNIFLOW_BACKEND_URL;

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/v1/auth/register",
    LOGIN: "/api/v1/auth/login",
    CHECK_EMAIL: "/api/v1/auth/check-email",
    GET_USER_INFO: "/api/v1/auth/getUser",
  },
  UPLOAD: {
    PROFILE_PIC: "/api/v1/upload/avatar",
  },
};
