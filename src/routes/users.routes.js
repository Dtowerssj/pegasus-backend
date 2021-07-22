const { Router } = require("express");
const router = Router();

const {
  getUsuarios,
  createUsuario,
  getUsuariobyId,
} = require("../controllers/users.controller");

const { getLogin } = require("../controllers/auth.controller")

router.get('/', getUsuarios);
router.post('/login', getLogin);
router.post('/', createUsuario);

module.exports = router;
