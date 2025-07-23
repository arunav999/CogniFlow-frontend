// ==================== IMPORTS ====================
import axiosInstance from "./axiosInstance"; // Pre-configured axios instance
import { API_PATHS } from "./apiPaths"; // Centralized API endpoint paths

// ==================== WORKSPACE SERVICE FUNCTIONS ====================

// Create a new workspace with provided form data
export const createWorkspace = async (formData) => {
  const response = await axiosInstance.post(
    API_PATHS.WORKSPACE.CREATE,
    formData
  );
  return response.data;
};

// Get all workspaces
export const workspacesAll = async () => {
  const response = await axiosInstance.get(API_PATHS.WORKSPACE.GET_ALL);
  return response.data;
};

// Get a workspace by its ID
export const workspaceById = async (id) => {
  const response = await axiosInstance.get(API_PATHS.WORKSPACE.GET_BY_ID(id));
  return response.data;
};

// Update (patch) a workspace by its ID
export const patchWorkspaceById = async (id, formData) => {
  const response = await axiosInstance.patch(
    API_PATHS.WORKSPACE.PATCH_BY_ID(id),
    formData
  );
  return response.data;
};

// Delete a workspace by its ID
export const deleteWorkspaceById = async (id) => {
  const response = await axiosInstance.delete(
    API_PATHS.WORKSPACE.DELETE_BY_ID(id)
  );
  return response.data;
};
