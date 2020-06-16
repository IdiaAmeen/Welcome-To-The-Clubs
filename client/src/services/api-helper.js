import axios from "axios";

// const baseUrl = "https://murmuring-wildwood-16683.herokuapp.com/";
const baseUrl = "https:localhost:3000";
const api = axios.create({
  baseURL: baseUrl,
});

export default api;
