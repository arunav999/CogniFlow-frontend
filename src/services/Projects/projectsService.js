import axiosInstance from "../Axios/axiosInstance";
import { API_PATHS } from "../API/apiPaths";

// Create new Project
export const createProject = async (formData) => {
  const response = await axiosInstance.post(API_PATHS.PROJECT.CREATE, formData);
  return response.data;
};

// Get all Projects for Current Workspace
export const getAllProjects = async (formData) => {
  const response = await axiosInstance.get(API_PATHS.PROJECT.GET_ALL, formData);
  return response.data;
};

// Get Project by id
export const getProjectById = async (id) => {
  const response = await axiosInstance.get(API_PATHS.PROJECT.GET_BY_ID(id));
  return response.data;
};

// Patch Project by id
export const patchProjectById = async (id, formData) => {
  const response = await axiosInstance.patch(
    API_PATHS.PROJECT.PATCH_BY_ID(id),
    formData
  );
  return response.data;
};

// Delete Project by id
export const deleteProjectById = async (id) => {
  const response = await axiosInstance.delete(
    API_PATHS.PROJECT.DELETE_BY_ID(id)
  );
  return response.data;
};
