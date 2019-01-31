const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello, francisco!");
  res.end();
});

app.listen(4000, (req, res) => {
  console.log("a request was made!");
});
