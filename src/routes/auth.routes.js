const { Router } = require("express");
const router = Router();

const { getLogin } = require("../controllers/auth.controller")

router.post('/', getLogin);

module.exports = router;
