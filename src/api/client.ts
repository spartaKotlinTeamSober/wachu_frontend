import qs from "qs";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

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

let activeRequests = 0;
const setGlobalLoading = (isLoading: boolean) => {
  if (isLoading) {
    activeRequests++;
  } else {
    activeRequests--;
  }
  // activeRequests가 0보다 크면 로딩 중, 0이면 로딩 완료
  document.body.classList.toggle("loading", activeRequests > 0);
};

wachuApiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    setGlobalLoading(true);
    if (
      config.url?.includes("/logout") ||
      config.url?.includes("/refresh-token")
    ) {
      config.withCredentials = true;
    }

    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    setGlobalLoading(false);
    return Promise.reject(error);
  }
);

wachuApiClient.interceptors.response.use(
  (response) => {
    setGlobalLoading(false);
    return response;
  },
  async (error) => {
    setGlobalLoading(false);
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}auth/refresh-token`,
          {},
          { withCredentials: true }
        );

        if (response.status === 200) {
          const newAccessToken = response.data;
          localStorage.setItem("token", newAccessToken);

          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axios(originalRequest);
        }
      } catch (refreshError) {
        console.error("Refresh token is invalid:", refreshError);
        alert("로그인이 필요합니다.");
        await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}auth/logout`,
          {},
          { withCredentials: true }
        );
        localStorage.removeItem("token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
