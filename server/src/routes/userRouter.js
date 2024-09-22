const UserController = require("../controllers/userController");
const express = require("express");
const routerUser = express.Router();

routerUser.post("/login", UserController.loginUser);
routerUser.post("/register", UserController.registerUser);

module.exports = routerUser;
