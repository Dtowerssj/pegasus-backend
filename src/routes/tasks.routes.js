const { Router } = require("express");
const router = Router();

const {
  getTareas,
  getTareasbyId,
  createTareas,
  updateTareas,
  deleteTareas,
} = require("../controllers/tasks.controller");


router.get("/tareas", getTareas);
router.get("/task/:id", getTareasbyId);
router.post("/task", createTareas);
router.put("/task/:id", updateTareas);
router.delete("/task/:id", deleteTareas);

module.exports = router;
