import { default as axios } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    // 'Access-Control-Allow-Origin': '*',
  },
});
instance.defaults.withCredentials = true;
/* Apply Interceptor */
// HTTP request interceptor
instance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = 'Bearer ' + accessToken;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
