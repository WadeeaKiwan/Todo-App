const express = require("express");
const connectDB = require("./utils/connectDb");
const bodyParser = require("body-parser");

const app = express();

// Connect Database
connectDB();

app.use(bodyParser.json());

app.use("/api/users", require("./routes/api/users-routes"));
app.use("/api/todos", require("./routes/api/todos-routes"));

app.listen(process.env.PORT || 5000, () => console.log("Connected to the Server!"));
