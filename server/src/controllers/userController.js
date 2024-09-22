const UserService = require("../services/userServices");
const { isValidEmail, isValidPhone } = require("../utils/checkInput");

const registerUser = async (req, res) => {
  const { name, email, password, confirmPassword, phone } = req.body;

  if (!email || !password || !confirmPassword || !name || !phone) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Dữ liệu không được rỗng!",
    });
  }

  const checkEmail = await isValidEmail(email);
  if (!checkEmail) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Email không hợp lệ!",
    });
  }
  const checkPhone = await isValidPhone(phone);

  if (!checkPhone) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Số điện thoại của bạn không đúng định dạng!",
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
    });
  }

  const checkEmail = await isValidEmail(email);
  if (!checkEmail) {
    return res.status(200).json({
      EC: "ERR",
      EM: "Email không hợp lệ!",
    });
  }

  const result = await UserService.loginUser(req.body);
  return res.status(200).json({
    EC: result.EC,
    EM: result.EM,
    DT: result.DT,
  });
};

module.exports = {
  loginUser,
  registerUser,
};
