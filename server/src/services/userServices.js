const User = require("../models/UserModel");
const { comparePassword, hashPassword } = require("../utils/checkInput");
const { access_token } = require("../utils/jwtToken");

const checkExistEmail = async (email) => {
  return await User.findOne({ email });
};
const checkExistPhone = async (phone) => {
  return await User.findOne({ phone });
};
const registerUser = async (data) => {
  try {
    const { email, password, phone, name } = data;

    const checkEmail = await checkExistEmail(email);
    if (checkEmail !== null) {
      return {
        EC: "ERR",
        EM: "Email exists!",
        DT: "",
      };
    }
    const checkPhone = await checkExistPhone(phone);
    if (checkPhone !== null) {
      return {
        EC: "ERR",
        EM: "Phone exists!",
        DT: "",
      };
    }

    const hassPass = await hashPassword(password);

    let result = await User.create({
      name: name,
      email: email,
      password: hassPass,
      phone: phone,
      isAdmin: false,
    });

    return {
      EC: 0,
      EM: "REGISTER SUCCESS!",
      DT: result,
    };
  } catch (error) {
    return {
      EC: "ERR",
      EM: error,
      DT: "",
    };
  }
};
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
    return {
      EC: 0,
      EM: "LOGIN SUCCESS!",
      DT: {
        USER: {
          email: checkUser.email,
          name: checkUser.name,
          phone: checkUser.phone,
        },
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
  registerUser,
};
