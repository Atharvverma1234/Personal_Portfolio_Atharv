import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const submitContact = (contactData) => API.post('/contact', contactData);
export const getMessages = () => API.get('/contact');