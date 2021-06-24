import api from "./api";

const getSchools = () => api.get("/");

const registerSchool = (schoolName, director) =>
  api.post("/new-school", { schoolName, director });

const getSchool = (id) => api.get(`/detalhes-escola/${id}`);

const deleteSchool = (id) => api.delete(`/delete-school/${id}`);

const updateSchool = (id, schoolName, directorName) =>
  api.put(`/edit-school/${id}`, { schoolName, directorName });

export default {
  getSchools,
  registerSchool,
  getSchool,
  deleteSchool,
  updateSchool,
};
