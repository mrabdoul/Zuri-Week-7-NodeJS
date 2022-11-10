const router = require('express').Router();
const controller = require('../controller/todoController');

// Get all tasks
router.get("/", controller.getAllTodos);

// Get single task
router.get("/:id", controller.getTodo);

// Create task
router.post("/", controller.createTodo);

// Update task
router.put("/:id", controller.updateTodo);

// Delete task
router.delete("/:id", controller.deleteTodo);




module.exports = router;