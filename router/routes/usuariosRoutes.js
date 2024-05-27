const {Router} = require("express");
const router = Router();
const {getUsers} = require("../../controllers/usuariosController");


router.get("/find", getUsers);

module.exports = router;