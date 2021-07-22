const { Router } = require("express");
const router = Router();

const {
  getTareas,
  getTareasbyId,
  createTareas,
  updateTareas,
  deleteTareas,
} = require("../controllers/tasks.controller");


router.get("/", getTareas);
router.get("/:id", getTareasbyId);
router.post("/", createTareas);
router.put("/:id", updateTareas);
router.delete("/:id", deleteTareas);

module.exports = router;
