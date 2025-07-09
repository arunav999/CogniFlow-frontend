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
