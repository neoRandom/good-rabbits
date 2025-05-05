import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.MODE === "development" ? `http://localhost:${import.meta.env.API_PORT || "3000"}/api` : "/api",
    withCredentials: true,
});
