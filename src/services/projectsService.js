// ==================== IMPORTS ====================
import axiosInstance from "./axiosInstance"; // Pre-configured axios instance
import { API_PATHS } from "./apiPaths"; // Centralized API endpoint paths

// ==================== PROJECT SERVICE FUNCTIONS ====================

// Create a new project with provided form data
export const createProject = async (formData) => {
  const response = await axiosInstance.post(API_PATHS.PROJECT.CREATE, formData);
  return response.data;
};

// Get all projects for the current workspace
export const getAllProjects = async (formData) => {
  const response = await axiosInstance.get(API_PATHS.PROJECT.GET_ALL, formData);
  return response.data;
};

// Get a project by its ID
export const getProjectById = async (id) => {
  const response = await axiosInstance.get(API_PATHS.PROJECT.GET_BY_ID(id));
  return response.data;
};

// Update (patch) a project by its ID
export const patchProjectById = async (id, formData) => {
  const response = await axiosInstance.patch(
    API_PATHS.PROJECT.PATCH_BY_ID(id),
    formData
  );
  return response.data;
};

// Delete a project by its ID
export const deleteProjectById = async (id) => {
  const response = await axiosInstance.delete(
    API_PATHS.PROJECT.DELETE_BY_ID(id)
  );
  return response.data;
};
