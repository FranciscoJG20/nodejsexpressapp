const express = require("express");
const app = express();
const ejs = require("ejs");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
//   res.end();
// });

app.set("view engine", "ejs");

// used to deliver an html file to the server! An alternative is to use the sendFile() method
app.use(express.static(__dirname + "/public"));
// OR
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });
// dirname above refers to the directory where we are currently

// this is how we pass data to a view, we pass an object as a second parameter in the render method
app.get("/profile/:name", (req, res) => {
  var data = {
    age: 27,
    job: "looking for full time opportunities",
    hobbies: ["dancing", "yogaing", "writing"]
  };
  res.render("profile", {
    person: req.params.name,
    data: data
  });
});

//example of returning a dynamic string
app.get("/customer/:id", (req, res) => {
  res.send("you are customer with id " + req.params.id);
});

app.listen(4000, (req, res) => {
  console.log("a request was made!");
});
