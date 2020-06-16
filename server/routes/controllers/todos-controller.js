const mongoose = require("mongoose");
const Todo = require("../../models/Todo");
const User = require("../../models/User");

const getTodos = async (req, res, next) => {
  res.json({ message: "hi todo" });
};

const createTodo = async (req, res, next) => {
  const { title, description, category } = req.body;

  try {
    const user = await User.findById("5ee876d6aa417d69e425a1df");
    if (!user) {
      return res.status(404).json({ message: "Could not find user for the provided id." });
    }

    const newTodo = await new Todo({
      title,
      description,
      category,
      user: "5ee876d6aa417d69e425a1df"
    });

    // Add the created todo to the todos array of the user
    const session = await mongoose.startSession();
    session.startTransaction();
    await newTodo.save({ session });
    user.todos.push(newTodo);
    await user.save({ session });
    await session.commitTransaction();

    res.status(201).json({ todo: newTodo.toObject({ getters: true }) });
  } catch (err) {
    console.error(err.message);
  }
};

const updateTodo = async (req, res, next) => {
  const { todoId } = req.params;
  const { title, description, category } = req.body;

  try {
    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      return res.status(404).json({ message: "This todo does not exist, please try another one" });
    }

    existingTodo.title = title;
    existingTodo.description = description;
    existingTodo.category = category;

    const updatedTodo = await existingTodo.save();

    res.status(200).json({ todo: updatedTodo.toObject({ getters: true }) });
  } catch (err) {
    console.error(err.message);
  }
};

const markTodo = async (req, res, next) => {
  const { todoId } = req.params;
  const { done } = req.body;

  try {
    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      return res.status(404).json({ message: "This todo does not exist, please try another one" });
    }

    existingTodo.done = done;

    const updatedTodo = await existingTodo.save();

    res.status(200).json({ todo: updatedTodo.toObject({ getters: true }) });
  } catch (err) {
    console.error(err.message);
  }
};

const deleteTodo = async (req, res, next) => {
  const { todoId } = req.params;

  try {
    const existingTodo = await Todo.findById(todoId).populate("user");
    if (!existingTodo) {
      return res.status(404).json({ message: "This todo does not exist, please try another one" });
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    await existingTodo.remove({ session });
    existingTodo.user.todos.pull(existingTodo);
    await existingTodo.user.save({ session });
    await session.commitTransaction();

    res.status(200).json({ message: "Todo Item deleted successfully" });
  } catch (err) {
    console.error(err.message);
  }
};

exports.getTodos = getTodos;
exports.createTodo = createTodo;
exports.updateTodo = updateTodo;
exports.markTodo = markTodo;
exports.deleteTodo = deleteTodo;