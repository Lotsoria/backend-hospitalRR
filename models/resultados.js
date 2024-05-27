const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resultados', {
    id_resultados: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    resultado: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_paciente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pacientes',
        key: 'id_paciente'
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
    tableName: 'resultados',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Relationship10",
        fields: [
          { name: "id_paciente" },
        ]
      },
      {
        name: "IX_Relationship11",
        fields: [
          { name: "id_examen" },
        ]
      },
      {
        name: "PK_resultados",
        unique: true,
        fields: [
          { name: "id_resultados" },
        ]
      },
    ]
  });
};
