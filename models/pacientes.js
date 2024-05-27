const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pacientes', {
    id_paciente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo_unico: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    primer_nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    segundo_nombres: {
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
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    genero: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cui: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    correo_electronico: {
      type: DataTypes.STRING(100),
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
    id_tipo_de_sangre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipos_de_sangre',
        key: 'id_tipo_de_sangre'
      }
    },
    id_genero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'generos',
        key: 'id_genero'
      }
    },
    id_transferencia_hospitalaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'transferencia_hospitalaria',
        key: 'id_transferencia_hospitalaria'
      }
    }
  }, {
    sequelize,
    tableName: 'pacientes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Relationship1",
        fields: [
          { name: "id_tipo_de_sangre" },
        ]
      },
      {
        name: "IX_Relationship12",
        fields: [
          { name: "id_transferencia_hospitalaria" },
        ]
      },
      {
        name: "IX_Relationship2",
        fields: [
          { name: "id_genero" },
        ]
      },
      {
        name: "PK_pacientes",
        unique: true,
        fields: [
          { name: "id_paciente" },
        ]
      },
    ]
  });
};
