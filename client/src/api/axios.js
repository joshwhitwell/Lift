//modules
import axios from "axios";

//env variables
const BASE_URL = process.env.REACT_APP_BASE_URL;

//axiosWithAuth
const axiosWithAuth = (token) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: { authorization: token },
  });
};

export default axiosWithAuth;
