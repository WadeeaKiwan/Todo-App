const { check } = require("express-validator");

const checkSignup = [
  check("name", "Please provide a name").not().isEmpty(),
  check("email", "Please provide a valid email").isEmail(),
  check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 })
];

const checkLogin = [
  check("email", "Please provide a valid email").isEmail(),
  check("password", "Password is required").not().isEmpty()
];

const checkTodo = [
  check("title", "Please provide a name").not().isEmpty(),
  check("description", "Please provide a description").not().isEmpty(),
  check("category", "Please provide a category").not().isEmpty()
];

exports.checkSignup = checkSignup;
exports.checkLogin = checkLogin;
exports.checkTodo = checkTodo;
