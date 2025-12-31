const Todo = require('../models/todo');

// Controller to get all todo items

exports.getTodos = async (req, res) => {
  try {
    // Fetch all todo items from the database
    const todos = await Todo.find({});
    // Send the list of todos as a JSON response
    res.status(200).json({
        success: true,
        data: todos,
        message: 'Todos fetched successfully'
    });


  } catch (error) {
    console.log('Error fetching todos:', error);
    res.status(500).json({
        success: false,
        message: 'Failed to fetch todos',
        error: error.message,
    });
    

  }
};

// Controller to get a todo item by ID
exports.getTodoById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: 'Todo fetched successfully',
    });
  } catch (error) {
    console.log('Error fetching todo by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch todo',
      error: error.message,
    });
  }
};


