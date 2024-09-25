import axios from "../setup/axios.customize";
export const axiosJWT = axios.create();

export const createUser = async (txtName, txtEmail, txtPassword, txtConfirmPassword, txtPhone) => {
  const URL_API = "/v1/api/user/register";
  const data = {
    name: txtName,
    email: txtEmail,
    password: txtPassword,
    confirmPassword: txtConfirmPassword,
    phone: txtPhone,
  };
  return await axios.post(URL_API, data);
};
export const loginUser = async (txtEmail, txtPassword) => {
  const URL_API = "/v1/api/user/login";
  const data = {
    email: txtEmail,
    password: txtPassword,
  };
  return await axios.post(URL_API, data);
};

export const refreshToken = async () => {
  const URL_API = "/v1/api/user/refresh_token";
  return await axios.post(URL_API);
};

export const getDetailUser = async (data, token) => {
  const URL_API = `/v1/api/user/detail-user/${data}`;
  return await axiosJWT.get(URL_API, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
