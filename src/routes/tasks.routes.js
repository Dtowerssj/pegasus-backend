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

router.get("/tags/", getTags);
router.get("/tags/:id", getTagsbyId);
router.post("/tags", createTags);
router.put("/tags/:id", updateTags);
router.delete("/tags/:id", deleteTags);

module.exports = router;
