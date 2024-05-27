const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('examenes', {
    id_examen: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tipo_examen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipos_examen',
        key: 'id_tipo_examen'
      }
    },
    id_tipo_muestra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipos_muestra',
        key: 'id_tipo_muestra'
      }
    },
    id_estado_muestra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'estados_muestra',
        key: 'id_estado_muestra'
      }
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
      allowNull: false
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'examenes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Relationship7",
        fields: [
          { name: "id_tipo_examen" },
        ]
      },
      {
        name: "IX_Relationship8",
        fields: [
          { name: "id_tipo_muestra" },
        ]
      },
      {
        name: "IX_Relationship9",
        fields: [
          { name: "id_estado_muestra" },
        ]
      },
      {
        name: "PK_examenes",
        unique: true,
        fields: [
          { name: "id_examen" },
        ]
      },
    ]
  });
};
