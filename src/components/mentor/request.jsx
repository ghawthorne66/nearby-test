import axios from "axios";

const request = axios.create({
  baseURL: "https://api.sidebox.com/",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("// Something with request error");
    console.log(error);
    Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("err " + error);
    return Promise.reject(error);
  }
);

export default request;
