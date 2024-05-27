const { Router } = require('express');
const router = Router();
const { getEstadosMuestra, getEstadoMuestraById } = require('../../../controllers/registros/estadoMuestraController');

router.get('/getEstadosMuestra', getEstadosMuestra);
router.get('/getEstadoMuestraById/:id', getEstadoMuestraById);

module.exports = router;