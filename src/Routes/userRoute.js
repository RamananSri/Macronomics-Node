const router = require("express").Router();
const user = require("../Models/userModel");
const userCtrl = require("../Controllers/userCtrl")(user);
const bodyParser = require("body-parser");
router.use(bodyParser.json());

/* Fetch user */
//router.user("/:id", userCtrl.fetchUser);

/* GET by id */
router.get("/:id/", function(req, res) {
  var user = userCtrl.getUserById(req.params.id);
  res.send(user);
});

router.get("/", function(req, res) {
  console.log("testing");
  user.find({}).exec(function(error, results) {
    if (error) {
      res.send("fejl");
    }
    console.log("det er ok");
    res.json(results);
  });
});

module.exports = router;
