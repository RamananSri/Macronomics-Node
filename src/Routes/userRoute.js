const router = require("express").Router();
const user = require("..Model/userModel");
const userCtrl = require("../Controllers/userCtrl")(user);
const bodyParser = require("body-parser");
router.user(bodyParser.json());

/* Fetch user */
router.user("/:id", userCtrl.fetchUser);

/* GET by id */
router.get("/:id/", userCtrl.getUser);

module.exports = router;