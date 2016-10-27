var express = require('express'); //including the express module
var app = express(); // so we can have easy access to all the functionalities provided by express

app.use(express.static('public')); // public/index.html

var movies = {'FindingDory' : '"Do you know how it feels to be looking for someone?" -Dory',
  'HOME' : '"What is the purpose of your face?" -Oh',
  'InsideOut': '"I am positive that you will get lost in there!" -Sadness'};

app.get('/movie/:name', function (request, response) {
  var movieName = request.params.name.toUpperCase();
  var bestQuote = movies[movieName];
  if(!bestQuote)
  {
    response.status(404).send("Can not find " + request.params.name)
  }else
  {
    response.send(bestQuote);
  }
});

// app.get('/', function (request, response) {
//   var movies = ['Finding Dory','Home','Inside Out']
//   //response.send(movies);
//   //response.json(movies);// Content-Type: application/json; charset=utf-8
//   //response.send('<h1>Easy and Fast!</h1>'+movies);
//  // response.redirect('/movie');
//   response.redirect(301,'/movie');
// });
// app.get('/moves', function (req, res) {
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

