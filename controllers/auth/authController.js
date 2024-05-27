const initModels = require("../../models/init-models");
const { sequelize } = require("../../config/database/db");
const models = initModels(sequelize);
const { usuarios } = models;

module.exports = {
    async login (req, res) {
        try {
            const validateUser = await usuarios.findOne({
                where: {
                    correo_electronico: req.body.correo_electronico,
                    contraseña: req.body.contraseña
                }
            });
            if (validateUser) {
                return res.json( {
                    message: true,
                    data: validateUser
                });
            } else {
                res.status(400).json({
                    message: "Usuario no encontrado"
                });
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    },
    async register (req, res) {
        console.log("Usuario registrado")
    },
};