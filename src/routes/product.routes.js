const { Router } = require("express");
const router = Router();

const {
  getProducts,
  getProductbyId,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");


router.get("/", getProducts);
router.get("/:id", getProductbyId);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
