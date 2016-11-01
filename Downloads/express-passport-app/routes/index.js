var express = require('express');
var router = express.Router();
var FacebookStrategy = require('passport-facebook').Strategy;
var passport  = require('passport');

passport.use(new FacebookStrategy({

      clientID: "195665477546819",
      clientSecret: "1ac2be845cdd7ab6a580c5be267d444e",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      cb(null, profile);
    }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Back End: Passport'});
});

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get("/auth/facebook/callback", passport.authenticate("facebook", {failureRedirect:"/"}),
    function (req, res, next) {
      res.redirect("/users")
    });

module.exports = router;
