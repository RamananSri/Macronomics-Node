const mongoose = require("mongoose");
var userSchema = mongoose.Schema;

var userModel = new Schema({
	id: int,
	name: string,
	age: int,
	height: double,
	weight: double,
	password: string
});

module.exports = mongoose.model("user", userModel);
