var express = require("express");
var router = express.Router();
const todo = require("../controllers/toDoController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", isAuthenticated, todo.view);

router.post("/", isAuthenticated, todo.create);

module.exports = router;
