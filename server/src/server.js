require("dotenv").config();
const express = require("express"); //commonjs
const routerAPI = require("./routes/");
const connection = require("./config/database");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// config cors
app.use(cors());

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//khai báo route
routerAPI(app);

(async () => {
  try {
    //using mongoose
    await connection();

    app.listen(port, () => {
      console.log(`Backend Nodejs App listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
