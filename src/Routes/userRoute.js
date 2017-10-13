const router = require("express").Router();
const user = require("../Models/userModel");
const userCtrl = require("../Controllers/userCtrl")(user);
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
	bodyParser.urlencoded({
		extended: true
	})
);

// http://mongoosejs.com/docs/api.html dette link er til dokumentation til diverse funktioner

/* GET by id */
router.get("/:id", function(req, res) {
	user
		.findOne({
			id: req.params.id
		})
		.exec(function(error, result) {
			if (error) {
				res.send("fejl: " + error);
			}
			console.log("User fundet");
			res.json(result);
		});
});

/* GET all - Dette er bare for testing */
router.get("/", function(req, res) {
	console.log("testing");
	user.find({}).exec(function(error, results) {
		if (error) {
			res.send("fejl: " + error);
		}
		console.log("det er ok");
		res.json(results);
	});
});

/* POST user */
// router.post("/", function(req, res) {
//   var newUser = new user();
//   newUser.name = req.body.name;
//   newUser.age = req.body.age;
//   newUser.height = req.body.height;
//   newUser.weight = req.body.weight;
//   newUser.password = req.body.password;
//   newUser.id = req.body.id;

//   newUser.save(function(error, result) {
//     if (error) {
//       res.send("Fejl med at oprette");
//     }
//     console.log("hej");
//     console.log(result);
//     res.send(result);
//   });
// });

/* POST user - bedre måde at gøre det på? */
router.post("/", function(req, res) {
	user.create(req.body, function(error, result) {
		if (error) {
			res.send("fejl");
		}
		console.log(result);
		res.send(user);
	});
});

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

/* PUT user */
router.put("/:id", function(req, res) {
	user.findOneAndUpdate(
		{
			id: req.params.id
		},
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
});

/*DELETE user */
router.delete("/:id", function(req, res) {
	user.findOneAndRemove(
		{
			id: req.params.id
		},
		function(error, resulst) {
			if (error) {
				res.send("fejl ved sletning");
			}
			res.send(user);
		}
	);
});

module.exports = router;
