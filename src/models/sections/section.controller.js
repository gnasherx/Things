import Section from "./section.model";
import { Todo } from "../todos/todo.index";

export const createSection = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({
      error: true,
      message: "Section title required!"
    });
  }
  if (!description) {
    return res.status(400).json({
      error: true,
      message: "Section description required!"
    });
  }

  const section = new Section({ title, description });

  try {
    return res.status(200).json({
      error: false,
      section: await section.save()
    });
  } catch (e) {
    return res.status(400).json({
      error: true,
      message: `Error when creating Section!: ${e}`
    });
  }
};

export const createSectionTodo = async (req, res) => {
  const { title, description } = req.body;
  const { sectionId } = req.params;

  if (!title) {
    return res.status(400).json({
      error: true,
      message: "Section todo title required!"
    });
  }
  if (!description) {
    return res.status(400).json({
      error: true,
      message: "Section todo description required!"
    });
  }

  if (!sectionId) {
    return res.status(400).json({
      error: true,
      message: "You need to provide section id!"
    });
  }

  try {
    const { todo, section } = await Section.addTodo(sectionId, {
      title,
      description
    });
    return res.status(201).json({
      error: false,
      todo,
      section
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: `Section cannot be created!: ${error}`
    });
  }
};

export const getSectionTodos = async (req, res) => {
  const { sectionId } = req.params;

  if (!sectionId) {
    return res.status(400).json({
      error: true,
      message: "You need to provide section id to get all todos"
    });
  }

  try {
    return res.status(200).json({
      error: false,
      todos: await Todo.find({ section: sectionId }).populate("section", "name")
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: `Cannot fetch the todo: ${error}`
    });
  }
};
