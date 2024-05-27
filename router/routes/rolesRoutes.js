const { Router } = require("express");
const router = Router();
const {
  getRoles,
  getRole,
  createRole,
  updateRole,
  deleteRole,
} = require("../../controllers/rolesController");

router.get("/find", getRoles);
router.get("/getRole/:id", getRole);
router.post("/create", createRole);
router.put("/update/:id", updateRole);
router.delete("/delete/:id", deleteRole);

module.exports = router;
