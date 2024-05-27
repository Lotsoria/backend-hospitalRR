const initModels = require("../../models/init-models");
const { sequelize } = require("../../config/database/db");

const models = initModels(sequelize);

const { estados_muestra } = models;

module.exports = {  
    async getEstadosMuestra(req, res) {
        try {
            const estadosMuestraList = await estados_muestra.findAll();
            res.json(estadosMuestraList);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error: " + error,
            });
        }
    },
    async getEstadoMuestraById(req, res) {
        try {
            const estadoMuestra = await estados_muestra.findByPk(req.params.id);
            res.json(estadoMuestra);
        } catch (error) {
            res.status(500).json({
                message: "Error: " + error,
            });
        }
    }
};