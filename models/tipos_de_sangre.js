const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipos_de_sangre', {
    id_tipo_de_sangre: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
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
    tableName: 'tipos_de_sangre',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_tipos_de_sangre",
        unique: true,
        fields: [
          { name: "id_tipo_de_sangre" },
        ]
      },
    ]
  });
};
