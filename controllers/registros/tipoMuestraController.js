const initModels = require("../../models/init-models");
const { sequelize } = require("../../config/database/db");

const models = initModels(sequelize);

const { tipos_muestra } = models;

module.exports = {  

    async getTiposMuestra(req, res) {
        try {
            const tiposMuestraList = await tipos_muestra.findAll();
            res.json(tiposMuestraList);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error: " + error,
            });
        }
    },

    async getTipoMuestraById(req, res) {
        try {
            const tipoMuestra = await tipos_muestra.findByPk(req.params.id);
            res.json(tipoMuestra);
        } catch (error) {
            res.status(500).json({
                message: "Error: " + error,
            });
        }
    },

}