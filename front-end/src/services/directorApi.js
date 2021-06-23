import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const getDirectors = () => api.get("/all-directors");

export default {
  getDirectors,
};
