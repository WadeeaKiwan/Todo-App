const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const Todo = require("../../models/Todo");
const User = require("../../models/User");

const getTodosByUserId = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const todos = await Todo.find({ user: userId }).sort("-createdAt");

    if (!todos) {
      return res
        .status(404)
        .json({ errors: [{ msg: "Could not find todo items for the provided user" }] });
    }

    res.status(200).json(todos.map((todo) => todo.toObject({ getters: true })));
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

const createTodo = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { title, description, category } = req.body;

  try {
    const user = await User.findById(req.userData.userId);
    if (!user) {
      return res
        .status(404)
        .json({ errors: [{ msg: "Could not find user for the provided id." }] });
    }

    const newTodo = await new Todo({
      title,
      description,
      category,
      user: req.userData.userId
    });

    // Add the created todo to the todos array of the user
    const session = await mongoose.startSession();
    session.startTransaction();
    await newTodo.save({ session });
    user.todos.push(newTodo);
    await user.save({ session });
    await session.commitTransaction();

    res.status(201).json(newTodo.toObject({ getters: true }));
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

const updateTodo = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { todoId } = req.params;
  const { title, description, category } = req.body;

  try {
    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      return res
        .status(404)
        .json({ errors: [{ msg: "This todo does not exist, please try another one" }] });
    }

    existingTodo.title = title;
    existingTodo.description = description;
    existingTodo.category = category;

    const updatedTodo = await existingTodo.save();

    res.status(200).json(updatedTodo.toObject({ getters: true }));
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

const markTodo = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { todoId } = req.params;
  const { done } = req.body;

  try {
    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      return res
        .status(404)
        .json({ errors: [{ msg: "This todo does not exist, please try another one" }] });
    }

    existingTodo.done = done;

    const updatedTodo = await existingTodo.save();

    res.status(200).json({ ...updatedTodo.toObject({ getters: true }) });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

const deleteTodo = async (req, res, next) => {
  const { todoId } = req.params;

  try {
    const existingTodo = await Todo.findById(todoId).populate("user");
    if (!existingTodo) {
      return res
        .status(404)
        .json({ errors: [{ msg: "This todo does not exist, please try another one" }] });
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    await existingTodo.remove({ session });
    existingTodo.user.todos.pull(existingTodo);
    await existingTodo.user.save({ session });
    await session.commitTransaction();

    res.status(200).json({ msg: "Todo Item deleted successfully" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

exports.getTodosByUserId = getTodosByUserId;
exports.createTodo = createTodo;
exports.updateTodo = updateTodo;
exports.markTodo = markTodo;
exports.deleteTodo = deleteTodo;
