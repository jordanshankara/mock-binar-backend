var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const user = require("../controllers/userController");
const isAuthenticated = require("../middlewares/isAuthenticated");

let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/user", isAuthenticated, user.whoami);

router.post("/register", user.register);
router.post("/login", urlencodedParser, user.login);


module.exports = router;
