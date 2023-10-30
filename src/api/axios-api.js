import axios from "axios";

const BASE_URL = "https://api.realworld.io/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
