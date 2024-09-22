require("dotenv").config();
const express = require("express"); //commonjs
const routerAPI = require("./routes/");
const connection = require("./config/database");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// config cors
app.use(cors());

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
