import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
});

const ENDPOINTS = {
  login: '/users/login'
}

export {
  API,
  ENDPOINTS
}