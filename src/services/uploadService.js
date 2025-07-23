// ==================== IMPORTS ====================
import axios from "axios"; // Axios for HTTP requests
import { API_PATHS } from "./apiPaths"; // Centralized API endpoint paths

// ==================== UPLOAD AXIOS INSTANCE ====================
// Separate axios instance for file uploads (can have different config)
const uploadAxios = axios.create({
  baseURL: import.meta.env.VITE_COGNIFLOW_BACKEND_URL,
  timeout: 10000,
  withCredentials: true,
});

// ==================== UPLOAD SERVICE FUNCTIONS ====================

// Upload a user profile picture (avatar)
export const uploadProfilePic = async (file) => {
  const formData = new FormData();
  formData.append("avatar", file);
  const res = await uploadAxios.patch(API_PATHS.UPLOAD.PROFILE_PIC, formData);
  return res.data;
};
