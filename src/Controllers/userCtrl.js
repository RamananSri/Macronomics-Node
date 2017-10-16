const user = require("../Models/userModel");

var getUserById = function(req, res) {
	user.findOne({ id: req.params.id }, function(error, result) {
		if (error) {
			res.send("fejl: " + error);
		}
		res.json(result);
	});
};

var getAllUsers = function(req, res) {
	user.find({}, function(error, results) {
		if (error) {
			res.send("fejl: " + error);
		}
		res.json(results);
	});
};

var postUser = function(req, res) {
	user.create(req.body, function(error, result) {
		if (error) {
			res.send("fejl");
		}
		console.log(result);
		res.send(user);
	});
};

var deleteUser = function(req, res) {
	user.findOneAndRemove({ id: req.params.id }, function(error, result) {
		if (error) {
			res.send("fejl ved sletning");
		}
		res.send(user);
	});
};

/* fandt en på netter som mente dette skulle virke i stedet for, har ikke læst op på findByIdAndUpdate endnu */
// router.put("/:id", function(req, res) {
//   user.findByIdAndUpdate(
//     id,
//     { $set: { name: req.body.name } },
//     { new: true },
//     function(error, result) {
//       if (error) return console.log(err);
//       res.send(result);
//     }
//   );
// });

var putUser = function(req, res) {
	user.findOneAndUpdate(
		{ id: req.params.id },
		{
			$set: { name: req.body.name, password: req.body.password }
		},
		{ upsert: true },
		function(error, result) {
			if (error) {
				console.log("fejl");
			}
			res.send(user);
		}
	);
};

var asd = function(req,res){
    
}

module.exports = {
	getUserById,
	getAllUsers,
	postUser,
	deleteUser,
	putUser
};
