import axios from "axios";
import queryString from "query-string";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {"Content-Type": "application/json"},
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

axiosClient.interceptors.request.use(async (config) => config)

axiosClient.interceptors.response.use(async (response) => {
  if (response && response.data) return response.data;

  return response;
},
(err) => {
  throw err.response.data;
})


export default axiosClient;
