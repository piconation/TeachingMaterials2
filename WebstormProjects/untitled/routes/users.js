var express = require('express');
var router = express.Router();
var basicAuth = require("basic-auth");

router.use(function (req, res, next) {
  var user = basicAuth(req);

  if (!user || user.name !== "Chris" || user.pass !== "password") {
    res.set("WWW-Authenticate", "Basic realm=What is the password?");
    return res.send(401);
  }

  req.session.user = user;
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the real world ' + req.session.user.name);
});

router.post("/tweet", function (req, res, next) {
  req.session.tweets = req.session.tweets || {};
  req.session.tweets[req.session.user.name] =req.session.tweets[req.session.user.name] || [];
  req.session.tweets[req.session.user.name].push('Can I come into the out now?');
  res.end();
});

router.get("/tweets", function (req, res, next) {
  res.send(JSON.stringify(req.session.tweets[req.session.user.name]));
});

module.exports = router;
