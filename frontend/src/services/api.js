import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const login = (email, password) =>
  api.post("/auth/login", { email, password });

export const getMovies = (category) =>
  api.get(`/movies/${category}`).then(res => res.data);

export const getProfiles = () =>
  api.get("/profiles").then(res => res.data);

export const subscribe = (plan) =>
  api.post("/payments/subscribe", { plan });
