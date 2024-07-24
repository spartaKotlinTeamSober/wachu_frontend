import axios, { AxiosInstance } from "axios";

export const wachuApiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT as string,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// wachuApiClient.interceptors.request.use((config) => {
//     console.log(config);
//     // const token = localStorage.getItem("token");
//     // if (token) {
//     //     config.headers
//     //         ? (config.headers.Authorization = `Bearer ${token}`)
//     //         : (config.headers =
//     //                 { Authorization: `Bearer ${token}` });
//     // }
// });

// wachuApiClient.interceptors.response.use(
//     (response) => {
//         console.log(response);
//         return response;
//     },
//     (error) => {
//         console.log(error);
//         return Promise.reject(error);
//     }
// );
