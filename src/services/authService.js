// ==================== IMPORTS ====================
import axiosInstance from "./axiosInstance"; // Custom axios instance with base config
import { API_PATHS } from "./apiPaths"; // Centralized API endpoint paths

// ==================== AUTH SERVICE FUNCTIONS ====================

// Register a new user with provided form data
export const registerUser = async (formData) => {
  const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, formData);
  return response.data;
};

// Check if a user exists by email (for signup validation)
export const checkUser = async (email) => {
  try {
    const response = await axiosInstance.get(API_PATHS.AUTH.CHECK_EMAIL, {
      params: { email },
    });
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || "Something went wrong",
      field: error?.response?.data?.field || "email",
    };
  }
};

// Login a user with credentials
export const loginUser = async (formData) => {
  const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, formData);
  return response.data;
};

// Get info for the currently authenticated user
export const getUserInfo = async () => {
  const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
  return response.data;
};

// Get user info by user ID
export const getUserById = async (id) => {
  const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_BY_ID(id));
  return response.data;
};

// Logout the current user
export const logoutUser = async () => {
  const response = await axiosInstance.post(API_PATHS.AUTH.LOGOUT);
  return response.data;
};
