import axios from "axios";
const api = axios.create({
  baseURL: "https://6a21943ab1d0aaf32b4fb5d8.mockapi.io",
});
export const getSports = async () => {
  const response = await api.get("/sports");
  return response.data;
};