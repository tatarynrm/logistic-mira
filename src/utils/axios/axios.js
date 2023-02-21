import axios from "axios";
import env from "react-dotenv";
const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
