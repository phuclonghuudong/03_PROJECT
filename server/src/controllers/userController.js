const UserService = require("../services/userServices");
const { isValidEmail, isValidPhone, isValidPassword } = require("../utils/checkInput");

const registerUser = async (req, res) => {
  const { name, email, password, confirmPassword, phone } = req.body;

  if (!email || !password || !confirmPassword || !name || !phone) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Dữ liệu không được rỗng!",
    });
  }

  const checkEmail = await isValidEmail(email);
  const checkPhone = await isValidPhone(phone);
  const checkPassword = await isValidPassword(password);

  if (!checkEmail) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Email không hợp lệ!",
      DT: "",
    });
  }

  if (!checkPhone) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Số điện thoại của bạn không đúng định dạng!",
      DT: "",
    });
  }
  if (!checkPassword) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Mật khẩu không đúng định dạng!",
      DT: "",
    });
  }

  const result = await UserService.registerUser(req.body);
  return res.status(200).json({
    EC: result.EC,
    EM: result.EM,
    DT: result.DT,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Email/Password không được rỗng!",
      DT: "",
    });
  }

  const checkEmail = await isValidEmail(email);
  if (!checkEmail) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Email không hợp lệ!",
      DT: "",
    });
  }
  const result = await UserService.loginUser(req.body);
  const { REFRESH_TOKEN, ...newResult } = result.DT;

  res.cookie("refresh_token", REFRESH_TOKEN, {
    httpOnly: true,
    // path: "/",
    secure: false, //changes secure
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    EC: result.EC,
    EM: result.EM,
    DT: newResult,
  });
};

const getDetailUser = async (req, res) => {
  if (!req.params.id) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Id không tồn tại!",
      DT: "",
    });
  }
  const result = await UserService.getDetailUser(req.params.id);

  return res.status(200).json({
    EC: result.EC,
    EM: result.EM,
    DT: result.DT,
  });
};
const refreshTokenUser = async (req, res) => {
  const result = await UserService.refreshTokenUser(req.cookies);

  const { REFRESH_TOKEN, ...newResult } = result?.DT;

  res.cookie("refresh_token", REFRESH_TOKEN, {
    httpOnly: true,
    secure: false, //changes secure
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    EC: result.EC,
    EM: result.EM,
    DT: newResult,
  });
};
const logoutUser = async (req, res) => {
  res.clearCookie("refresh_token");

  return res.status(200).json({
    EC: result.EC,
    EM: result.EM,
    DT: "",
  });
};

module.exports = {
  loginUser,
  registerUser,
  refreshTokenUser,
  getDetailUser,
  logoutUser,
};
