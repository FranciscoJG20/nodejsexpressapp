const express = require("express");
const app = express();
const ejs = require("ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.end();
});

app.set("view engine", "ejs");

// used to deliver an html file to the server! An alternative is to use the sendFile() method
// app.use(express.static(__dirname + "/public"));
// OR
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.get("/profile/:name", (req, res) => {
  res.render("profile", { person: req.params.name });
});

app.get("/customer/:id", (req, res) => {
  res.render("you are customer with id " + req.params.id);
});

app.listen(4000, (req, res) => {
  console.log("a request was made!");
});
