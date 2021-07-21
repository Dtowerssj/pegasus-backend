const { Router } = require('express');
const router = Router();

const {
    getTags,
    getTag,

    getLists,

    getInbox,
    getTasks,
    getTask,

    createTag,
    createList,
    createTask,

    updateTag,
    updateList,
    updateTask,

    deleteTag,
    deleteList,
    deleteTask,
} = require('../controllers/lists.controllers');

/*
router.get('/tareas/', getTareas);
router.get('/task/:id', getTask);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);
*/

module.exports = router;