const { Router } = require("express");
const router = Router();

const {
  getTags,
  getTagsbyId,

  getTareas,
  getTareasbyId,

  createTags,
  createTareas,

  updateTags,
  updateTareas,

  deleteTags,
  deleteTareas,
} = require("../controllers/tasks.controller", "../controllers/tags.controller");


router.get("/tareas/", getTareas);
router.get("/task/:id", getTareasbyId);
router.post("/task", createTareas);
router.put("/task/:id", updateTareas);
router.delete("/task/:id", deleteTareas);

module.exports = router;
