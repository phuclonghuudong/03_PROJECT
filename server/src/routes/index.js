const UserRouter = require("./userRouter");
//Test API http://localhost:8080/v1/api/

const routerAPI = (app) => {
  app.use("/v1/api/user", UserRouter);
};

module.exports = routerAPI;
