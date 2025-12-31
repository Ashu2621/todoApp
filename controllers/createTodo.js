const Todo = require('../models/todo');

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      title,
      description
    });

    res.status(201).json({
      success: true,
      data: todo,
      message: 'Todo created successfully'
    });

  } catch (error) {
    console.error("CREATE TODO ERROR 👉", error); // 👈 IMPORTANT
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: "Server Error"
    });
  }
};
