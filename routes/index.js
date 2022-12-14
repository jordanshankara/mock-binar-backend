var express = require('express');
var router = express.Router();
const users = require("./users");
const todo = require("./todo");

router.use(users);
router.use(todo);

module.exports = router;
