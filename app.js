const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const index = require("./src/Routes/index");
const users = require("./src/Routes/userRoute");

const app = express();

var port = 3000;

// When the app start up we also connect to the database
// Everytime we use a model, we will require moongose, and require is casched
// so the connection is shared among all instances using const mongoose = require('mongoose')
mongoose.connect(
  "mongodb://Macronomics:Macronomics123@ds117965.mlab.com:17965/macronomics",
  {
    useMongoClient: true
  }
);

app.use("/", index);
app.use("/users", users);

app.listen(port, function() {
  console.log("Macronomics server running on port" + port);
});
