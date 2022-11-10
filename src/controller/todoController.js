const Todo = require('../model/Todo');

// Get all tasks
exports.getAllTodos = async (req, res) => {
    try {
        let todos = await Todo.find();
        if(todos.length === 0)
        return res.status(404).json({
            success: false,
            message: "No tasks found"
        });
        res.status(200).json({
            success: true,
            message: "Tasks found",
            todos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}
// Get single task
exports.getTodo = async (req, res) => {
	try {
		let id = {_id: req.params.id};
		let todo = await Todo.findOne(id);
        if(!todo) return res.status(404).json({
            success: false,
            message: "Task does not exist"
        })
		res.status.json({
			message: "Task found",
			todo
		});
	} catch (error) {
		res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message });
	}
}

// Create task
exports.createTodo = async (req, res) => {
	try {
		let todo = await req.body;
		let created = await Todo.create(todo);
		if(!created) return res.status(400).json({
            success: false,
            message: "Task creation failed"
        })
		res.status(201).json({
			success: true,
			message: "Task created",
			todo: created
		});
	} catch (error) {
		res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message });
	}
};

// Update task
exports.updateTodo = async (req, res) => {
	try {
		let id = {_id: req.params.id}
		let todo = await req.body;
		let update = await Todo.findOneAndUpdate(id, todo, {new: true});
		if(!update) return res.status(400).json({
			success: false,
			message: "Task not updated"
		});
		return res.status(200).json({
			success: true,
			message: "Task updated",
			todo: update
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error.message});
	}
}

// Delete task
exports.deleteTodo = async (req, res) => {
	try {
		let id = { _id: req.params.id }
		let deleted = await Todo.findOneAndRemove(id);
		if(!deleted) return res.status(400).json({
			success: false,
			message: "Task not deleted"
		});
		return res.status(200).json({
			message: "Task deleted",
			todo: deleted
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message});
	}
};