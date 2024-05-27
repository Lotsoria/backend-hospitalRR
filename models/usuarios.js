const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    correo_electronico: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'contraseña': {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nombre_completo: {
      type: DataTypes.STRING(255),
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
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id_rol'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Relationship3",
        fields: [
          { name: "id_rol" },
        ]
      },
      {
        name: "PK_usuarios",
        unique: true,
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
