import axiosInstance from "../Axios/axiosInstance";
import { API_PATHS } from "../API/apiPaths";

// Get workspace by id
export const workspaceById = async (id) => {
  const response = await axiosInstance.get(API_PATHS.WORKSPACE.GET_BY_ID(id));
  return response.data;
};
