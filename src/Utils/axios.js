import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:  'https://kpjtiklecturer-001.et.r.appspot.com',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export function setBasicAuth() {
    axiosInstance.defaults.headers.common['Authorization'] = `Basic a290YWtwZW5nYWR1YW4uanRpa0BnbWFpbC5jb206ZTUwNzQxNmE1YjY0ODk2OTRlNjM3MjAwYjE3MTA3Y2M4MGZkYWYxNjFlM2UzNWExNDJiNTEwNGIzMmI4Y2I2ZA==`
}

export function setBearerToken(token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default axiosInstance;
