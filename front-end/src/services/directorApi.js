import api from './api';

const getDirectors = () => api.get("/all-directors");

export default {
  getDirectors,
};
