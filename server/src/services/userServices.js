const User = require("../models/UserModel");
const { comparePassword, hashPassword } = require("../utils/checkInput");
const { ACCESS_TOKEN, REFRESH_TOKEN, VERIFY_TOKEN } = require("../utils/jwtToken");

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
      DT: "",
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
      name: checkUser?.name,
      phone: checkUser?.phone,
      isAdmin: checkUser?.isAdmin,
    };
    const accessToken = await ACCESS_TOKEN(payload);
    const refreshToken = await REFRESH_TOKEN(payload);
    return {
      EC: 0,
      EM: "LOGIN SUCCESS!",
      DT: {
        USER: {
          email: checkUser.email,
          name: checkUser.name,
          phone: checkUser.phone,
          isAdmin: checkUser.isAdmin,
        },
        ACCESS_TOKEN: accessToken,
        REFRESH_TOKEN: refreshToken,
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
const refreshTokenUser = async (data) => {
  try {
    const result = await VERIFY_TOKEN(data.refresh_token);

    const payload = {
      id: result?._id,
      email: result?.email,
      name: result?.name,
      phone: result?.phone,
      isAdmin: result?.isAdmin,
    };
    const accessToken = await ACCESS_TOKEN(payload);
    const refreshToken = await REFRESH_TOKEN(payload);

    return {
      EC: 0,
      EM: "REFRESH TOKEN SUCCESS!",
      DT: {
        ACCESS_TOKEN: accessToken,
        REFRESH_TOKEN: refreshToken,
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
const getDetailUser = async (data) => {
  try {
    const result = await User.findOne({ _id: data }).select("-password");
    if (!result) {
      return {
        EC: "ERR",
        EM: "ERROR",
        DT: "",
      };
    }

    return {
      EC: 0,
      EM: "SUCCESS",
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

module.exports = {
  loginUser,
  registerUser,
  refreshTokenUser,
  getDetailUser,
};
