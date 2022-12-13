var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));

const passport = require("./lib/passport");
app.use(passport.initialize());

const addAuthenticated = require("./middlewares/addAuthenticated");
app.use(addAuthenticated);

const router = require("./routes");
app.use(router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
