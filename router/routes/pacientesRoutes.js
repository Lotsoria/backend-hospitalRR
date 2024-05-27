const {Router} = require("express");
const router = Router();
const {getPacientes, getPacienteByCodigoUnico} = require("../../controllers/pacientesController");

router.get("/find", getPacientes);
router.get("/find/:codigo_unico", getPacienteByCodigoUnico);

module.exports = router;