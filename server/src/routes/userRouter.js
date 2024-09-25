const UserController = require("../controllers/userController");
const express = require("express");
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");
const delay = require("../middleware/delay");
const routerUser = express.Router();
// const delay = require("../middleware/delay");

routerUser.post("/login", UserController.loginUser);
routerUser.post("/register", UserController.registerUser);
routerUser.post("/refresh_token", UserController.refreshTokenUser);
routerUser.get("/detail-user/:id", authUserMiddleWare, UserController.getDetailUser);

module.exports = routerUser;
