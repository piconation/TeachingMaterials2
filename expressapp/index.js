/**
 * Created by mattpowell on 10/25/16.
 */

var express = require('express');
var app = express();
//when a get request is coming from the root
app.get('/', function (req, res) {
    res.send('Super Fast - Express!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});