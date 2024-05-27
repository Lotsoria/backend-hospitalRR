const { Router } = require('express');
const router = Router();
const { getExamenes, getExamenById,getExamenByTipoMuestra,  createExamen } = require('../../../controllers/registros/examenesController');

router.get('/getExamenes', getExamenes);
router.get('/getExamenById/:id', getExamenById);
router.post('/createExamen', createExamen);
router.get('/getExamenByTipoMuestra/:id', getExamenByTipoMuestra);

module.exports = router;