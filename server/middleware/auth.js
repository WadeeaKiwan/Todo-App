const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(401).json({ msg: "No token, authorization denied" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.userData = { userId: decodedToken.userId };

    next();
  } catch (err) {
    res.status(401).json({ msg: "Authentication failed!" });
  }
};
