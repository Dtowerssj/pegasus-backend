const { Router } = require('express');
const router = Router();

const { 
    getUsuarios, 
    getLogin,
    createUser, 
    updateUser, 
    deleteUser 
} = require('../controllers/users.controller');


router.get('/', (req,res) => {
    console.log("ayuda")
    res.json("Hola mundo")
});
router.get('/usuarios', getUsuarios);
/*router.post('/login', getLogin);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
*/
module.exports = router;