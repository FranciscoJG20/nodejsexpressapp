const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello, francisco!");
  res.end();
});

app.get("/profile/:name", (req, res) => {
  res.send(
    "you have requested to see a profile with the name of " + req.params.name
  );
});

app.listen(4000, (req, res) => {
  console.log("a request was made!");
});
