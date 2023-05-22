import axiosPackage from 'axios';

const API_BASE_URL = 'https://homeease.vercel.app';

export const axios = axiosPackage.create({
  headers: {
    'Content-Type': 'application/json',
  },

  baseURL: API_BASE_URL,
});
