const initModels = require("../models/init-models");
const { sequelize } = require("../config/database/db");

const models = initModels(sequelize);

const { pacientes } = models;

module.exports = {
  async getPacientes(req, res) {
    try {
      const pacientesList = await pacientes.findAll();
      res.json(pacientesList);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },

  //Obtener un paciente por su codigo unico
  async getPacienteByCodigoUnico(req, res) {
    try {
      const paciente = await pacientes.findOne({
        where: {
          codigo_unico: req.params.codigo_unico
        }
      });
      if (paciente) {
        res.json(paciente);
      } else {
        res.status(404).json({
          message: "No se encontró un paciente con este código único"
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error
      });
    }
  }
  
};
