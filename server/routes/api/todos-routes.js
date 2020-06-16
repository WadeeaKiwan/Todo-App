const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  markTodo
} = require("../controllers/todos-controller");

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/update/:todoId", updateTodo);
router.put("/:todoId/done", markTodo);
router.delete("/:todoId", deleteTodo);

module.exports = router;
