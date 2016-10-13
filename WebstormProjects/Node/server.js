/**
 * Created by mattpowell on 10/13/16.
 */

"use strict";

var events = require("events");
var net = require("net");

const BROADCAST_NAME = "onmessage";

var serverEmitter = new events.EventEmitter();

var server = net.createServer(function(socket){
    console.log(`Client ${socket.remoteAddress} connected`);
    socket.write("Server is here\n");
    serverEmitter.on(BROADCAST_NAME, onMessageReceived);

    var data = "";
    socket.on("data", function(chunk){
        data += chunk.toString("utf8");
        if (data.endsWith("\n")) {
            serverEmitter.emit(BROADCAST_NAME, {
                data: data,
                address: socket.remoteAddress
            });
            process.stdout.write(`${socket.remoteAddress}: ${data}`);
            data = "";
        }
    });

    socket.on("end", function () {
        serverEmitter.removeListener(BROADCAST_NAME, onMessageReceived);
        console.log("Someone really cool left. His name is Matt.");
    });

    function onMessageReceived(msg){
        if (socket.remoteAddress === msg.address) {
            return;
        }

        socket.write(`${msg.address}: ${msg.data}`)
    }
});

server.listen(8888);


