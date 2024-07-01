/* eslint-disable no-undef */
import axios from 'axios';

export const baseURL = 'https://dev.umujyi.com/api/v1';

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
