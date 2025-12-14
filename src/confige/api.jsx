import axios from "axios";

const API_URI = "https://acute-diet-begun-investments.trycloudflare.com/api/v1";

const api = axios.create({
  baseURL: API_URI,
  timeout: 2000,
});

export default api;
