import axios from "axios";
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Alter defaults after instance has been created
// instance.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response?.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.data) return error?.response?.data;

    return Promise.reject(error);
  }
);

export default instance;
