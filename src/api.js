import axios from 'axios';

const api = axios.create({
  baseURL: "https://656250b6dcd355c08324c2b3.mockapi.io/v1/",
});

export const insertShirt = payload => api.post(`/shirts`, payload);
export const getAllShirts = () => api.get(`/shirts`);
export const updateShirtById = (id, payload) => api.put(`/shirts/${id}`, payload);
export const getSingleShirt = (id) => api.get(`/shirts/${id}`);
export const deleteShirtById = id => api.delete(`/shirts/${id}`);
