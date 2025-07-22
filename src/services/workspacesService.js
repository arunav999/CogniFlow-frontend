import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

// Create workspace
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

// Get workspace by id
export const workspaceById = async (id) => {
  const response = await axiosInstance.get(API_PATHS.WORKSPACE.GET_BY_ID(id));
  return response.data;
};

// Patch workspace by id
export const patchWorkspaceById = async (id, formData) => {
  const response = await axiosInstance.patch(
    API_PATHS.WORKSPACE.PATCH_BY_ID(id),
    formData
  );
  return response.data;
};

// Delete workspace by id
export const deleteWorkspaceById = async (id) => {
  const response = await axiosInstance.delete(
    API_PATHS.WORKSPACE.DELETE_BY_ID(id)
  );
  return response.data;
};
