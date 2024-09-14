const UserService = require("../services/userServices");
const { isValidEmail } = require("../utils/checkInput");

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
};
