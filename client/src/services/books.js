import api from "./api-helper";
export const createBook = async (data, club_id) => {
  const resp = await api.post(`/clubs/${club_id}/books`, { book: data });
  return resp.data;
};

export const readAllBooks = async () => {
  const resp = await api.get("/books");
  return resp.data;
};

export const readBook = async (id) => {
  const resp = await api.get(`/books/${id}`);
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
