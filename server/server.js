"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var net = require("net");
var dotenv = require("dotenv");
var readline = require("readline");
var handler_1 = require("./lib/handler");
var nodes_1 = require("./lib/nodes");
dotenv.config();
var port = process.env.PORT || 3000;
var host = process.env.HOST || "127.0.0.1";
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
exports.server = net.createServer(function (socket) {
    /*
    socket.on('data', (data : string) : void => {
        console.log(`Server: Received ${data}`);
        socket.write(data);
        socket.pipe(socket);
    }); */
    socket.on('end', function () {
        (0, nodes_1.removeNode)(socket);
        console.log("[DISCONNECT] Node ".concat(socket.remoteAddress, " has disconnected"));
    });
});
exports.server.on('connection', function (socket) {
    (0, nodes_1.addNode)(socket);
    console.log("[CONNECT] Node ".concat(socket.remoteAddress, " has connected"));
});
exports.server.on('error', function (err) {
    throw err;
});
exports.server.on('close', function () {
    process.exit(1);
});
exports.server.on('listening', function () {
    var address = exports.server.address();
    console.log("[SERVER] TCP server is running on ".concat(address.address, ":").concat(address.port));
    commandPrompt();
});
exports.server.listen(port, host);
var commandPrompt = function () {
    rl.question('command> ', function (input) {
        (0, handler_1.handle)(input);
        commandPrompt();
    });
};
