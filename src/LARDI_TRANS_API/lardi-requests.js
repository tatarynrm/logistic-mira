import axios from "./axios";

export const getMyCargo = async () => {
  try {
    const { data } = axios.get("/proposals/my/cargoes/published");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
