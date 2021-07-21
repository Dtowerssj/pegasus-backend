const { Router } = require('express');
const router = Router();

const { 
    getUsuarios, 
    getLogin,
    createUser, 
    updateUser, 
    deleteUser 
} = require('../controllers/users.controllers');

router.get('/', getUsuarios);
router.post('/login', getLogin);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;