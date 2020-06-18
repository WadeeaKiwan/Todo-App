const express = require("express");
const router = express.Router();
const { checkSignup, checkLogin } = require("../../middleware/validation");
const auth = require("../../middleware/auth");
const { getAuthUser, getUsers, signupUser, loginUser } = require("../controllers/users-controller");

router.get("/", auth, getAuthUser);
router.get("/all", auth, getUsers);
router.post("/signup", checkSignup, signupUser);
router.post("/login", checkLogin, loginUser);

module.exports = router;
