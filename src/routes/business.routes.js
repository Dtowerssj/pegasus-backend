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

router.get('/business', getBusiness);
router.get('/business/:id', getBusinessbyId);
router.post('/login', getLogin);
router.post('/business', createBusiness);
router.put('/business/:id', updateBusiness);
router.delete('business/:id', deleteBusiness);

module.exports = router;

