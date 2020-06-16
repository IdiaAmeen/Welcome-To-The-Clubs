import axios from "axios";

const baseUrl = "https://calm-harbor-04850.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
