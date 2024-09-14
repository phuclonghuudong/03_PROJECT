const UserController = require("../controllers/userController");
const express = require("express");
const routerUser = express.Router();

routerUser.post("/login", UserController.loginUser);

module.exports = routerUser;
