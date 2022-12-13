var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const user = require("../controllers/userController");

let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/register", user.register);
router.post("/login", urlencodedParser, user.login);

module.exports = router;
