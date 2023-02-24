import axios from "axios";
import { LARDI_URL, TOKEN } from "./lardi";
const instance = axios.create({
  baseURL: `${LARDI_URL}`,
  headers: {
    Accept: "application/json",
    Authorization: `${TOKEN}`,
  },
});

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = window.localStorage.getItem("token");
//   return config;
// });

export default instance;
