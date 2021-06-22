import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
});

const getSchools = () => (api.get('/'));

const registerSchool = (schoolName, director) => (api.post('/new-school', { schoolName, director}))

export default {
    getSchools,
    registerSchool,
};
