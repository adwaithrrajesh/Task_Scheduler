const { Router } = require('express');
const router = Router();
const {addTask} = require('../controller/taskController');

router.post('/addTask',addTask);


module.exports = router;