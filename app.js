require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const {dbConnectSqlServer} = require("./config/database/db");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

require("./router/index")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

dbConnectSqlServer();  