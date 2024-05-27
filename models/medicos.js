const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medicos', {
    id_medico: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    primer_nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    segundo_nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    otros_nombres: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    primer_apellido: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    segundo_apellido: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    otros_apellidos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    correo_electronico: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'medicos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_medicos",
        unique: true,
        fields: [
          { name: "id_medico" },
        ]
      },
    ]
  });
};
