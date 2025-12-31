const express = require('express');
const router = express.Router();
const { createTodo } = require('../controllers/createTodo');
const { getTodos } = require('../controllers/getTodo');
const{ getTodoById } = require('../controllers/getTodo');
const { updateTodo } = require('../controllers/updateTodo');
const { deleteTodo } = require('../controllers/deleteTodo');

router.get('/getTodos/:id', getTodoById);
router.post('/todos', createTodo);
router.get('/getTodos', getTodos);
router.put('/updateTodo/:id', updateTodo);
router.delete('/deleteTodo/:id', deleteTodo);

module.exports = router;