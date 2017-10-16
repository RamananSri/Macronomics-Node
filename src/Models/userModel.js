const mongoose = require("mongoose");
var userSchema = mongoose.Schema;

//TODO: Mongoose har ikke double/float, derfor skal vi bruge number til height og weight. Dog kan vi hente et plugin til at lave til float.
var userModel = new userSchema({
	id: Number,
	name: String,
	age: Number,
	height: Number,
	weight: Number,
	password: String,
	weighIns: [
		{
			weight: Number,
			date: {
				type: Date,
				default: Date.now()
			}
		}
	]
});

module.exports = mongoose.model("user", userModel);
