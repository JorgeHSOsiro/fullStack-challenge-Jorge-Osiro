import api from "./api";

const loginDirector = (email, password) => api.post("/login-director", { email, password});
const loginTeacher = (email, password) => api.post("/login-teacher", { email, password});
const registerUser = (name, password, email, role) =>
  api.post("/register-user", { name, password, email, role });

export default {
  loginDirector,
  loginTeacher,
  registerUser,
};
