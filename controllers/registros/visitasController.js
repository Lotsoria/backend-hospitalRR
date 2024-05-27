const initModels = require("../../models/init-models");
const { sequelize } = require("../../config/database/db");
const models = initModels(sequelize);

const {
  visitas,
  pacientes,
  medicos,
  examenes,
  tipos_examen,
  tipos_muestra,
  estados_muestra,
} = models;

module.exports = {
  async getVisitas(req, res) {
    try {
      const visitasList = await visitas.findAll();
      res.json(visitasList);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },

  async getVisitaById(req, res) {
    try {
      const visita = await visitas.findByPk(req.params.id);
      res.json(visita);
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },

  async getVisitaByTipoMuestra(req, res) {
    try {
      // Obtener los exámenes del tipo de muestra especificado
      const dataExamenes = await examenes.findAll({
        where: {
          id_tipo_muestra: req.params.id_tipo_muestra,
        },
      });

      // Si no se encuentran exámenes, devolver un mensaje de error
      if (dataExamenes.length === 0) {
        return res.status(404).json({
          message:
            "No se encontraron exámenes para el tipo de muestra especificado.",
        });
      }

      // Obtener los IDs de los exámenes encontrados
      const examenesIds = dataExamenes.map((examen) => examen.id_examen);

      // Buscar las visitas que tengan alguno de esos IDs de examen
      const dataVisita = await visitas.findAll({
        where: {
          id_examen: examenesIds,
        },
        include: [
          {
            model: pacientes,
            as: "id_paciente_paciente",
          },
          {
            model: medicos,
            as: "id_medico_medico",
          },
          {
            model: examenes,
            as: "id_examen_examene",
            include: [
              {
                model: tipos_muestra,
                as: "id_tipo_muestra_tipos_muestra",
              },
              {
                model: estados_muestra,
                as: "id_estado_muestra_estados_muestra",
              },
              {
                model: tipos_examen,
                as: "id_tipo_examen_tipos_examen",
              },
            ],
          },
        ],
      });

      res.json(dataVisita);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },

  async createVisita(req, res) {
    const { id_paciente, id_medico, id_examen } = req.body;
    try {
      const newVisita = await visitas.create({
        id_paciente,
        id_medico,
        id_examen,
      });
      res.json(newVisita);
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error,
      });
    }
  },
};
