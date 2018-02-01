import Todo from "./todo.model";

// CREATE A NEW TODO
export const createTodo = async (req, res) => {
  const { title, description, tag, status } = req.body;
  const newTodo = new Todo({ title, description, tag, status });

  try {
    return res.status(201).json({
      todo: await newTodo.save()
    });
  } catch (error) {
    return res.status(error.status).json({
      error: true,
      message: "Error while creating a new Todo!"
    });
  }
};

// GET ALL TODO
export const getAllTodos = async (req, res) => {
  try {
    return res.status(200).json({
      todos: await Todo.find({})
    });
  } catch (error) {
    return res.status(error.status).json({
      error: true,
      message: "Error while getting your all Todos!"
    });
  }
};
