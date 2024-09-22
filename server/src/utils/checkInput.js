const bcrypt = require("bcryptjs");
const saltRounds = 10;

const hashPassword = async (password) => {
  const hashPass = await bcrypt.hash(password, saltRounds);
  return hashPass;
};

const comparePassword = async (txtPassword, password) => {
  const pass = await bcrypt.compare(txtPassword, password);
  return pass;
};

const isValidEmail = async (email) => {
  // Biểu thức chính quy kiểm tra định dạng email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return await emailPattern.test(email);
};
const isValidPhone = async (phone) => {
  // Biểu thức chính quy kiểm tra định dạng số điện thoại
  const check = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  return await check.test(phone);
};

module.exports = {
  hashPassword,
  comparePassword,
  isValidEmail,
  isValidPhone,
};
