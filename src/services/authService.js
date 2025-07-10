import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

// Register new user
export const registerUser = async (formData) => {
  const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, formData);
  return response.data;
};

// Login user
export const loginUser = async (formData) => {
  const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, formData);
  return response.data;
};

// check user
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
