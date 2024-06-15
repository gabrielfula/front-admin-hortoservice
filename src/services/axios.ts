import axios from "axios"

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_HORTOSERVICE_API,
});

export const loggedOutInstance = axios.create({
  baseURL: import.meta.env.VITE_HORTOSERVICE_API,
});
  