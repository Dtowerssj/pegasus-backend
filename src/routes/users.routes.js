const { Router } = require("express");
const router = Router();

const {
  getUsuarios,
  getLogin,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuariobyId,
} = require("../controllers/users.controller", "../controllers/auth.controller");

router.get("/usuarios", getUsuarios);
router.get("/:id", getUsuariobyId);
router.post("/login", getLogin);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);

module.exports = router;
