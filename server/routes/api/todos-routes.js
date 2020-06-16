const express = require("express");
const router = express.Router();
const { checkTodo } = require("../../middleware/validation");
const {
  getTodosByUserId,
  createTodo,
  updateTodo,
  deleteTodo,
  markTodo
} = require("../controllers/todos-controller");

router.get("/user/:userId", getTodosByUserId);
router.post("/", checkTodo, createTodo);
router.put("/update/:todoId", checkTodo, updateTodo);
router.put("/:todoId/done", markTodo);
router.delete("/:todoId", deleteTodo);

module.exports = router;
