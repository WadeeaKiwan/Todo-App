const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

// Get the authenticated user
const getAuthUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.userData.userId).select("-password");

    res.status(200).json({ ...user.toObject({ getters: true }) });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, "-password");

    if (!users || users.length === 0) {
      return res.status(404).json({ errors: [{ msg: "could not find users." }] });
    }

    res.status(200).json({ ...users.map((user) => user.toObject({ getters: true })) });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

const signupUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }).populate("-password");

    if (existingUser) {
      return res
        .status(422)
        .json({ errors: [{ msg: "User already exists, please login instead." }] });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      image: "https://vectorified.com/images/avatar-icon-png-31.png"
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ user: user.toObject({ getters: true }), token });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;
  try {
    const existingUser = await await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(422)
        .json({ errors: [{ msg: "User does not exist, please signup instead." }] });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res
        .status(403)
        .json({ errors: [{ msg: "Invalid credentials, could not log you in." }] });
    }

    const token = jwt.sign({ userId: existingUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    res.status(201).json({ user: existingUser.toObject({ getters: true }), token });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

exports.getAuthUser = getAuthUser;
exports.getUsers = getUsers;
exports.signupUser = signupUser;
exports.loginUser = loginUser;
