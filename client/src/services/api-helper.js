import axios from "axios";

const baseUrl = "https://murmuring-wildwood-16683.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
