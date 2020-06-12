import api from "./api-helper";
export const createClub = async (data) => {
  const resp = await api.post("/clubs", { club: data });
  return resp.data;
};

export const readAllClubs = async () => {
  const resp = await api.get("/clubs");
  return resp.data;
};

export const updateClub = async (id, data) => {
  const resp = await api.put(`/clubs/${id}`, { club: data });
  return resp.data;
};

export const destroyClub = async (id) => {
  const resp = await api.delete(`/clubs/${id}`);
  return resp.data;
};
