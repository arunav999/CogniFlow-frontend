// ==================== AXIOS INSTANCE CONFIGURATION ====================
// This file exports a pre-configured axios instance for all API requests.
// It sets the base URL, default headers, timeout, and credentials policy.

import axios from "axios";
import { BASE_URL } from "./apiPaths";

// Create a reusable axios instance for the app
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Backend API base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Send cookies with requests
});

// You can add interceptors here if needed for auth, logging, etc.
// axiosInstance.interceptors.request.use()

export default axiosInstance;
