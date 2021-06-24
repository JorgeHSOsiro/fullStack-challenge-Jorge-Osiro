import api from "./api";

const loginDirector = () => api.post("/login-director");
const loginTeacher = () => api.post("/login-teacher");
const registerUser = (name, password, email, role) =>
  api.post("/register-user", { name, password, email, role });

export default {
  loginDirector,
  loginTeacher,
  registerUser,
};
