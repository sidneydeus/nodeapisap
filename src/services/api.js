import "dotenv/config";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: "6309ae2ecb6048d08e1d153135c49327e316f6d1"
  }
});

export default api;
