const { Router } = require("express");
const router = Router();

const {
  getBusiness,
  createBusiness,
  getBusinessbyId,
  updateBusiness,
  deleteBusiness
} = require("../controllers/business.controller");

const { getLogin } = require("../controllers/auth.controller")

router.get('/', getBusiness);
router.get('/:id', getBusinessbyId);
router.post('/login', getLogin);
router.post('/', createBusiness);
router.put('/:id', updateBusiness);
router.delete('/:id', deleteBusiness);

module.exports = router;

