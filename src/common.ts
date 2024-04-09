import axios from "axios";
import type { AxiosInstance } from "axios";
import { getAccessToken } from "./utils/authenticate.js";

const apiClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:80/api",
    headers: {
        "Authorization": "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
    },
});

export default apiClient;