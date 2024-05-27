var DataTypes = require("sequelize").DataTypes;
var _estados_muestra = require("./estados_muestra");
var _examenes = require("./examenes");
var _generos = require("./generos");
var _medicos = require("./medicos");
var _pacientes = require("./pacientes");
var _resultados = require("./resultados");
var _roles = require("./roles");
var _tipos_de_sangre = require("./tipos_de_sangre");
var _tipos_examen = require("./tipos_examen");
var _tipos_muestra = require("./tipos_muestra");
var _transferencia_hospitalaria = require("./transferencia_hospitalaria");
var _usuarios = require("./usuarios");
var _visitas = require("./visitas");

function initModels(sequelize) {
  var estados_muestra = _estados_muestra(sequelize, DataTypes);
  var examenes = _examenes(sequelize, DataTypes);
  var generos = _generos(sequelize, DataTypes);
  var medicos = _medicos(sequelize, DataTypes);
  var pacientes = _pacientes(sequelize, DataTypes);
  var resultados = _resultados(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var tipos_de_sangre = _tipos_de_sangre(sequelize, DataTypes);
  var tipos_examen = _tipos_examen(sequelize, DataTypes);
  var tipos_muestra = _tipos_muestra(sequelize, DataTypes);
  var transferencia_hospitalaria = _transferencia_hospitalaria(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var visitas = _visitas(sequelize, DataTypes);

  examenes.belongsTo(estados_muestra, { as: "id_estado_muestra_estados_muestra", foreignKey: "id_estado_muestra"});
  estados_muestra.hasMany(examenes, { as: "examenes", foreignKey: "id_estado_muestra"});
  resultados.belongsTo(examenes, { as: "id_examen_examene", foreignKey: "id_examen"});
  examenes.hasMany(resultados, { as: "resultados", foreignKey: "id_examen"});
  visitas.belongsTo(examenes, { as: "id_examen_examene", foreignKey: "id_examen"});
  examenes.hasMany(visitas, { as: "visita", foreignKey: "id_examen"});
  pacientes.belongsTo(generos, { as: "id_genero_genero", foreignKey: "id_genero"});
  generos.hasMany(pacientes, { as: "pacientes", foreignKey: "id_genero"});
  visitas.belongsTo(medicos, { as: "id_medico_medico", foreignKey: "id_medico"});
  medicos.hasMany(visitas, { as: "visita", foreignKey: "id_medico"});
  resultados.belongsTo(pacientes, { as: "id_paciente_paciente", foreignKey: "id_paciente"});
  pacientes.hasMany(resultados, { as: "resultados", foreignKey: "id_paciente"});
  visitas.belongsTo(pacientes, { as: "id_paciente_paciente", foreignKey: "id_paciente"});
  pacientes.hasMany(visitas, { as: "visita", foreignKey: "id_paciente"});
  usuarios.belongsTo(roles, { as: "id_rol_role", foreignKey: "id_rol"});
  roles.hasMany(usuarios, { as: "usuarios", foreignKey: "id_rol"});
  pacientes.belongsTo(tipos_de_sangre, { as: "id_tipo_de_sangre_tipos_de_sangre", foreignKey: "id_tipo_de_sangre"});
  tipos_de_sangre.hasMany(pacientes, { as: "pacientes", foreignKey: "id_tipo_de_sangre"});
  examenes.belongsTo(tipos_examen, { as: "id_tipo_examen_tipos_examen", foreignKey: "id_tipo_examen"});
  tipos_examen.hasMany(examenes, { as: "examenes", foreignKey: "id_tipo_examen"});
  examenes.belongsTo(tipos_muestra, { as: "id_tipo_muestra_tipos_muestra", foreignKey: "id_tipo_muestra"});
  tipos_muestra.hasMany(examenes, { as: "examenes", foreignKey: "id_tipo_muestra"});
  pacientes.belongsTo(transferencia_hospitalaria, { as: "id_transferencia_hospitalaria_transferencia_hospitalarium", foreignKey: "id_transferencia_hospitalaria"});
  transferencia_hospitalaria.hasMany(pacientes, { as: "pacientes", foreignKey: "id_transferencia_hospitalaria"});

  return {
    estados_muestra,
    examenes,
    generos,
    medicos,
    pacientes,
    resultados,
    roles,
    tipos_de_sangre,
    tipos_examen,
    tipos_muestra,
    transferencia_hospitalaria,
    usuarios,
    visitas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
