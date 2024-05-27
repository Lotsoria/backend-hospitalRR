const initModels = require("../../models/init-models");
const { sequelize } = require("../../config/database/db");

const models = initModels(sequelize);

const { tipos_examen } = models;

module.exports = {
    async getTiposExamen(req, res) {
        try {
        const tiposExamenList = await tipos_examen.findAll();
        res.json(tiposExamenList);
        } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error: " + error,
        });
        }
    },
    
    //Obtener un tipo de examen por su id
    async getTipoExamenById(req, res) {
        try {
        const tipoExamen = await tipos_examen.findByPk(req.params.id);
        res.json(tipoExamen);
        } catch (error) {
        res.status(500).json({
            message: "Error: " + error,
        });
        }
    }
};