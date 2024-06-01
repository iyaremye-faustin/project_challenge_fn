/* eslint-disable no-undef */
import axios from 'axios';

export const baseURL = process.env.REACT_APP_BACKEND_URL;

export const api = axios.create({
  baseURL: `${baseURL}`
});

api.interceptors.request.use(
  (config) => {
    const tokenId = sessionStorage.getItem('farm_sys_token');
    config.headers.Authorization = `Bearer ${tokenId}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
