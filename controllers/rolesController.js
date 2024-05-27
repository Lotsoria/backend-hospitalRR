const initModels = require("../models/init-models");
const { sequelize } = require("../config/database/db");

const models = initModels(sequelize);
const { roles } = models;

module.exports = {
  async getRoles(req, res) {
    try {
      const rolesList = await roles.findAll();
      res.json(rolesList);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },

  async getRole(req, res) {
    try {
      const role = await roles.findByPk(req.params.id);
      res.json(role);
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },

  async createRole(req, res) {
    try {
      const role = await roles.create(req.body);
      res.json(role);
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },

  async updateRole(req, res) {
    try {
      await roles.update(req.body, {
        where: {
          id_rol: req.params.id, // Asegúrate de que este campo coincide con el nombre del campo en tu tabla
        },
      });
      res.json({ message: "Role updated" });
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },

  async deleteRole(req, res) {
    try {
      await roles.destroy({
        where: {
          id_rol: req.params.id, // Asegúrate de que este campo coincide con el nombre del campo en tu tabla
        },
      });
      res.json({ message: "Role deleted" });
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },
};
