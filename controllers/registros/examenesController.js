const initModels = require("../../models/init-models");
const { sequelize } = require("../../config/database/db");
const moment = require("moment");

const models = initModels(sequelize);

const { examenes } = models;

module.exports = {
  async getExamenes(req, res) {
    try {
      const dataExamenes = await examenes.findAll();
      res.json(dataExamenes);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },
  async getExamenById(req, res) {
    try {
      const dataExamen = await examenes.findByPk(req.params.id);
      res.json(dataExamen);
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },
  async getExamenByTipoMuestra (req, res) {
    try {
      const dataExamen = await examenes.findAll({
        where: {
          id_tipo_muestra: req.params.id_tipo_muestra
        }
      });
      res.json(dataExamen);
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },
  
  async createExamen(req, res) {
    console.log(req.body);
    try {
      const { id_tipo_examen, id_tipo_muestra, id_estado_muestra } = req.body;
      const nuevoExamen = await examenes.create({
        id_tipo_examen,
        id_tipo_muestra,
        id_estado_muestra,
        estado: 1,
      });
      res.json(nuevoExamen);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },
};
