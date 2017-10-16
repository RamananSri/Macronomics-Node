const router = require("express").Router();
const bodyParser = require("body-parser"); // Expected encoding in body = JSON
router.use(bodyParser.json());

const userCtrl = require("../Controllers/userCtrl");

// http://mongoosejs.com/docs/api.html mongoose documentation link

/* GET by id */
router.get("/:id", userCtrl.getUserById);

/* GET all */
router.get("/", userCtrl.getAllUsers);

/* POST user */
router.post("/", userCtrl.postUser);

/* PUT user */
router.put("/:id", userCtrl.putUser);

/* DELETE user */
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
