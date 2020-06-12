import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;

export const createBook = async (data) => {
  const resp = await api.post("/books", { book: data });
  return resp.data;
};

export const readAllBooks = async () => {
  const resp = await api.get("/books");
  return resp.data;
};

export const updateBook = async (id, data) => {
  const resp = await api.put(`/books/${id}`, { book: data });
  return resp.data;
};

export const destroyBook = async (id) => {
  const resp = await api.delete(`/books/${id}`);
  return resp.data;
};
