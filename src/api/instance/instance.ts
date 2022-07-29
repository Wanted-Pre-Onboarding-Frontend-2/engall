import axios from "axios";
import { HttpRequest } from "./HttpRequest";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
  },
});

export const apiRequest = new HttpRequest(axiosInstance);
