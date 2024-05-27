const { Router } = require('express');
const router = Router();   
const { getVisitas, getVisitaById,getVisitaByTipoMuestra, createVisita } = require('../../../controllers/registros/visitasController');

router.get('/getVisitas', getVisitas);
router.get('/getVisitaById/:id', getVisitaById);
router.post('/createVisita', createVisita);
router.get('/getVisitaByTipoMuestra/:id_tipo_muestra', getVisitaByTipoMuestra);

module.exports = router;