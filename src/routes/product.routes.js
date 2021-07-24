const { Router } = require("express");
const router = Router();

const {
  getProducts,
  getProductbyId,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");


router.get("/productos", getProducts);
router.get("/productos/:id", getProductbyId);
router.post("/productos", createProduct);
router.put("/productos/:id", updateProduct);
router.delete("/productos/:id", deleteProduct);

module.exports = router;
