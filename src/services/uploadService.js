import axios from "axios";

import { API_PATHS } from "./apiPaths";

const uploadAxios = axios.create({
  baseURL: import.meta.env.VITE_COGNIFLOW_BACKEND_URL,
  timeout: 10000,
  withCredentials: true,
});

export const uploadProfilePic = async (file) => {
  const formData = new FormData();
  formData.append("avatar", file);

  const res = await uploadAxios.patch(API_PATHS.UPLOAD.PROFILE_PIC, formData);
  return res.data;
};
