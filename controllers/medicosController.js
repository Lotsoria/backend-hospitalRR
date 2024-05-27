const initModels = require("../models/init-models");
const { sequelize } = require("../config/database/db");
const models = initModels(sequelize);

const { medicos } = models;

module.exports = {
    //Obtener todos los medicos
    async getMedicos(req, res) {
        try {
            const medicosList = await medicos.findAll();
            res.json(medicosList);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error: " + error,
            });
        }
    },
    //Obtener un medico por id
    async getMedicoById(req, res) {
        try {
            const medico = await medicos.findByPk(req.params.id);
            res.json(medico);
        } catch (error) {
            res.status(500).json({
                message: "Error: " + error,
            });
        }
    },
};