const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser
} = require("../controllers/User.controller");


router.get('/', getUsers);
router.get('/:id', getUserbyId);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
