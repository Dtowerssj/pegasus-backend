const { Router } = require("express");
const router = Router();

const {
  getUsuarios,
  createUsuario,
  getUsuariobyId,
} = require("../controllers/users.controller");

const { getLogin } = require("../controllers/auth.controller")

router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuariobyId);
router.post("/login", getLogin);
router.post("/usuarios", createUsuario);

module.exports = router;
