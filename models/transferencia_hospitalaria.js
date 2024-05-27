const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transferencia_hospitalaria', {
    id_transferencia_hospitalaria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hospital_origen: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_envio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
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
    }
  }, {
    sequelize,
    tableName: 'transferencia_hospitalaria',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_transferencia_hospitalaria",
        unique: true,
        fields: [
          { name: "id_transferencia_hospitalaria" },
        ]
      },
    ]
  });
};
