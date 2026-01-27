import axios from "axios";
import { Environment } from "./env.config.js";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: Environment.API_BASE_URL,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any request modifications here (e.g., auth tokens)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors here
    if (error.response?.status === 401) {
      // Handle unauthorized access
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;