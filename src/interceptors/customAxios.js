import axios from 'axios';

// axios instance for making requests 
const axiosInstance = axios.create({
    baseURL:`https://shanu-blog.herokuapp.com/api`,
    timeout: 10000, 
});

// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  // add token to request headers
  config.headers['authorization'] = localStorage.getItem('token');
  return config;
});

export default axiosInstance;