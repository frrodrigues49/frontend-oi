import axios from "axios";

export const api = axios.create({
  // baseURL: "http://api.ethosistemas.com.br/"
  baseURL: "http://localhost:3000/"
});

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
