var express = require('express');
var router = express.Router();
const users = require("./users");

router.use(users);

module.exports = router;
