var express = require("express");
var router = express.Router();

const userController = require("../controllers/userController");

router.post("/signup", userController.sign_up_post);
router.post("/login", userController.login_post);

router.post("/posts", userController.verify_token);

module.exports = router;
