/**
 * Created by mattpowell on 10/11/16.
 */

var http = require("http");

var server = http.createServer(function (req, res) {
    res.end("It works. Hello to " + req.url)
});

server.listen(8000, function() {
    console.log("Listening on 8000");
});

