const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visitas', {
    id_visita: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_paciente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pacientes',
        key: 'id_paciente'
      }
    },
    id_medico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'medicos',
        key: 'id_medico'
      }
    },
    id_examen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'examenes',
        key: 'id_examen'
      }
    }
  }, {
    sequelize,
    tableName: 'visitas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Relationship4",
        fields: [
          { name: "id_paciente" },
        ]
      },
      {
        name: "IX_Relationship5",
        fields: [
          { name: "id_medico" },
        ]
      },
      {
        name: "IX_Relationship6",
        fields: [
          { name: "id_examen" },
        ]
      },
      {
        name: "PK_visitas",
        unique: true,
        fields: [
          { name: "id_visita" },
        ]
      },
    ]
  });
};
