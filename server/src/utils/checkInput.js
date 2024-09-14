const bcrypt = require("bcryptjs");
const saltRounds = 10;

const hashPassword = async (password) => {
  const hashPass = await bcrypt.hash(saltRounds, password);
  return hashPass;
};

const comparePassword = async (txtPassword, password) => {
  const pass = await bcrypt.compare(txtPassword, password);
  return pass;
};

const isValidEmail = async (email) => {
  // Biểu thức chính quy kiểm tra định dạng email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

module.exports = {
  hashPassword,
  comparePassword,
  isValidEmail,
};
