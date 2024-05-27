const rolesRoutes = require('./routes/rolesRoutes');
const authRoutes = require('./routes/authRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const pacientesRoutes   = require('./routes/pacientesRoutes');
const medicosRoutes = require('./routes/medicosRoutes');
const tiposExamenRoutes = require('./routes/registros/tiposExamenRoutes');
const tiposMuestraRoutes = require('./routes/registros/tipoMuestraRoutes');
const estadosMuestraRoutes = require('./routes/registros/estadoMuestraRoutes');
const examenesRoutes = require('./routes/registros/examenRoutes');
const visitasRoutes = require('./routes/registros/visitaRoutes');

module.exports = (app) => {
    app.use('/roles', rolesRoutes);
    app.use('/auth', authRoutes);
    app.use('/usuarios', usuariosRoutes);
    app.use('/pacientes', pacientesRoutes);
    app.use('/medicos', medicosRoutes);
    app.use('/tiposExamen', tiposExamenRoutes);
    app.use('/tiposMuestra', tiposMuestraRoutes);
    app.use('/estadosMuestra', estadosMuestraRoutes);
    app.use('/examenes', examenesRoutes);
    app.use('/visitas', visitasRoutes);
}