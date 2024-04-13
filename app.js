const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("hello there");
});

app.get("/login", (req, res) => {
  res.send("Login screen");
});

app.listen(process.env.PORT, () => {
  console.log("server is listening " + process.env.PORT);
});
