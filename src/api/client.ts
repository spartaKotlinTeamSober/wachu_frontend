import qs from "qs";
import axios, { AxiosInstance } from "axios";

export const wachuApiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT as string,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

wachuApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const errorData = error.response.data;
      console.error(
        `Error: ${errorData.message}, Code: ${errorData.errorCode}`
      );
      return Promise.reject(new Error(errorData.message));
    } else {
      console.error("Unexpected error:", error);
      return Promise.reject(
        new Error("Failed to send email code due to an unexpected error")
      );
    }
  }
);
