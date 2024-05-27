const { Sequelize } = require("sequelize");

const database = process.env.SQL_SERVER_DATABASE;
const username = process.env.SQL_SERVER_USER;
const password = process.env.SQL_SERVER_PASSWORD;
const host = process.env.SQL_SERVER_HOST;
const port = process.env.SQL_SERVER_PORT;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mssql",
  port,
});

const dbConnectSqlServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("SQL Server conexión correcta");
  } catch (error) {
    console.log("SQL Server Error de conexión ", error);
  }
};

module.exports = { sequelize, dbConnectSqlServer };
