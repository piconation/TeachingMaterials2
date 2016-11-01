var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    else
    {
        console.log("Your user was not logged in.");
        res.redirect('/');
    }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {message: req.user.displayName});
});

module.exports = router;
