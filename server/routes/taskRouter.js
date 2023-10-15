const { Router } = require('express');
const router = Router();
const {addTask, getTask,deleteTask,updateTask} = require('../controller/taskController');

router.post('/addTask',addTask);
router.get('/getTask',getTask)
router.delete('/deleteTask',deleteTask)
router.patch('/updateTask',updateTask)

module.exports = router;