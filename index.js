const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
//   res.end();
// });

// used to deliver an html file to the server! An alternative is to use the sendFile() method
app.use(express.static(__dirname + "/public"));

app.get("/profile/:name", (req, res) => {
  res.send(
    "you have requested to see a profile with the name of " + req.params.name
  );
});

app.get("/customer/:id", (req, res) => {
  res.send("you are customer with id " + req.params.id);
});

app.listen(4000, (req, res) => {
  console.log("a request was made!");
});
