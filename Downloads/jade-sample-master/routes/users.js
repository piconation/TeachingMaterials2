var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    users: [
        {name: "Chris", age: 31},
        {name: "Emily", age: 30},
        {name: "Marci", age: 27},
        {name: "Evelynne", age: 1}
    ]
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
