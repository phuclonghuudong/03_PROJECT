const User = require("../models/userModels");
const { comparePassword } = require("../utils/checkInput");
const { access_token } = require("../utils/jwtToken");

const loginUser = async (data) => {
  try {
    const { email, password } = data;

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return {
        EC: "ERR",
        EM: "User not found. Email not exists!",
        DT: "",
      };
    }

    if (checkUser?.password) {
      const isCheckPassword = await comparePassword(password, checkUser?.password);
      if (!isCheckPassword) {
        return {
          EC: "ERR",
          EM: "Email/Password không hợp lệ",
          DT: "",
        };
      }
    }
    const payload = {
      id: checkUser?._id,
      email: checkUser?.email,
      name: checkUser?.name || checkUser?.email,
    };
    const accessToken = access_token(payload);
    console.log("access_token", accessToken);
    return {
      EC: 0,
      EM: "LOGIN SUCCESS!",
      DT: {
        USER: checkUser,
        ACCESS_TOKEN: accessToken,
      },
    };
  } catch (error) {
    return {
      EC: "ERR",
      EM: error,
      DT: "",
    };
  }
};

module.exports = {
  loginUser,
};
