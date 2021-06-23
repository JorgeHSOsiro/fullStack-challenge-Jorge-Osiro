import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const getSchools = () => api.get("/");

const registerSchool = (schoolName, director) =>
  api.post("/new-school", { schoolName, director });

const getSchool = (id) => api.get(`/detalhes-escola/${id}`);

const deleteSchool = (id) => api.delete(`/delete-school/${id}`);

export default {
  getSchools,
  registerSchool,
  getSchool,
  deleteSchool,
};
