import axios from "axios";

import { BASE_URL } from "../API/apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// axiosInstance.interceptors.request.use()

export default axiosInstance;
