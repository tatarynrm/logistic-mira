import axios from "axios";
import env from "react-dotenv";
const instance = axios.create({
  baseURL: "https://api.tatarynmira.pp.ua",
  // baseURL: "http://localhost:8800",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
