import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-task-manager-1-bkem.onrender.com/api",
});
export default api;
