var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    users: req.session.users
  })
});

router.get('/create', function(req, res, next){
    res.render("create-user");
});

router.post('/create', function(req, res, next){
    var user = {
        name: req.body.name,
        email: req.body.email
    };

    res.redirect("/users");
});

module.exports = router;
