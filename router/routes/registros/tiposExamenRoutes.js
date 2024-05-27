const { Router } = require('express');
const router = Router();
const { getTiposExamen, getTipoExamenById } = require('../../../controllers/registros/tiposExamenController');

router.get('/getTiposExamen', getTiposExamen);
router.get('/getTipoExamenById/:id', getTipoExamenById);

module.exports = router;