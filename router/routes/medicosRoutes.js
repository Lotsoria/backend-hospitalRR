const { Router } = require("express");
const router = Router();
const { getMedicos, getMedicoById } = require("../../controllers/medicosController");

router.get("/find", getMedicos);
router.get("/getByid/:id", getMedicoById);

module.exports = router;