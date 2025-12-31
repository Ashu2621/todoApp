const Todo = require('../models/todo');
// Controller to delete a todo item by ID
exports.deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const deletedTodo = await Todo.findByIdAndDelete(todoId);
        res.json({
            success: true,
            data: deletedTodo,
            message: 'Todo deleted successfully'
        });
    } catch (error) {
        console.log('Error deleting todo:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete todo'
        });
    }
}