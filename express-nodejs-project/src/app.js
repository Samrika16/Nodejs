// src/app.js
const express = require("express");
const sls = require('serverless-http')
const { greet } = require("../lib");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // res.json({message: greet()})
  res.status(200).send(greet())
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;


