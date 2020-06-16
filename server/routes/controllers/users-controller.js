const User = require("../../models/User");

const getUsers = async (req, res, next) => {
  res.json({ message: "hi user" });
};

const signupUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }).populate("-password");
    if (existingUser) {
      return res.status(422).json({
        message: "User exists already, please login instead."
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      image:
        "https://i0.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?ssl=1"
    });
    console.log(user);

    res.status(201).json({ user: user.toObject({ getters: true }) });
  } catch (err) {
    console.error(err.message);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(422).json({
        message: "User does not exist, please signup instead."
      });
    }

    console.log(existingUser);

    res.status(200).json({ user: existingUser.toObject({ getters: true }) });
  } catch (err) {
    console.error(err.message);
  }
};

exports.getUsers = getUsers;
exports.signupUser = signupUser;
exports.loginUser = loginUser;
