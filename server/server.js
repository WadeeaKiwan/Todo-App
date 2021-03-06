const fs = require("fs");
const path = require("path");

const express = require("express");
const connectDB = require("./utils/connectDb");
const bodyParser = require("body-parser");

const app = express();

// Connect Database
connectDB();

app.use(bodyParser.json());

app.use(express.static(path.join("public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use("/api/users", require("./routes/api/users-routes"));
app.use("/api/todos", require("./routes/api/todos-routes"));

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 5000, () => console.log("Connected to the Server!"));
