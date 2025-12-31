const Todo = require('../models/todo');

exports.updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;

    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,                               // ✅ direct ID
      { $set: req.body, updatedAt: Date.now() }, // ✅ safe update
      { new: true, runValidators: true }    // ✅ best practice
    );

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }

    res.status(200).json({
      success: true,
      data: updatedTodo,   // ✅ correct response
      message: 'Todo updated successfully'
    });

  } catch (error) {
    console.log('Error updating todo:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update todo'
    });
  }
};
