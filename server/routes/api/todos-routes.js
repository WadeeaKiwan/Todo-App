const express = require("express");
const router = express.Router();
const { checkTodo } = require("../../middleware/validation");
const auth = require("../../middleware/auth");
const {
  getTodo,
  getTodosByUserId,
  createTodo,
  updateTodo,
  deleteTodo,
  markTodo
} = require("../controllers/todos-controller");

router.get("/:todoId", auth, getTodo);
router.get("/user/:userId", auth, getTodosByUserId);
router.post("/", [auth, checkTodo], createTodo);
router.put("/update/:todoId", [auth, checkTodo], updateTodo);
router.put("/:todoId/done", auth, markTodo);
router.delete("/:todoId", auth, deleteTodo);

module.exports = router;
