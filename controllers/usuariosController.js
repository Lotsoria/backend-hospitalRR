const initModels = require("../models/init-models");
const { sequelize } = require("../config/database/db");

const models = initModels(sequelize);
const { usuarios } = models;

module.exports = {
    async getUsers(req, res) {
        try {
            const usersList = await usuarios.findAll();
            res.json(usersList);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error: " + error,
            });
        }
    }
}