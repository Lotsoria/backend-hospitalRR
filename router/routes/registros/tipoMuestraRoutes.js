const { Router } = require("express");
const router = Router();
const { getTiposMuestra, getTipoMuestraById } = require("../../../controllers/registros/tipoMuestraController");

router.get("/getTiposMuestra", getTiposMuestra);
router.get("/getTipoMuestraById/:id", getTipoMuestraById);

module.exports = router;
