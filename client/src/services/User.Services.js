import axios from "../setup/axios.customize";
// import axios from "axios";

const createUser = (txtName, txtEmail, txtPassword, txtConfirmPassword, txtPhone) => {
  const URL_API = "/v1/api/user/register";
  const data = {
    name: txtName,
    email: txtEmail,
    password: txtPassword,
    confirmPassword: txtConfirmPassword,
    phone: txtPhone,
  };
  return axios.post(URL_API, data);
};
const loginUser = (txtEmail, txtPassword) => {
  const URL_API = "/v1/api/user/login";
  const data = {
    email: txtEmail,
    password: txtPassword,
  };
  return axios.post(URL_API, data);
};

export { createUser, loginUser };
