"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNode = exports.addNode = exports.Nodes = void 0;
var node_1 = require("../class/node");
exports.Nodes = new Map();
var addNode = function (socket) {
    var newNode = new node_1.Node(socket);
    exports.Nodes.set(newNode.address, newNode);
};
exports.addNode = addNode;
var removeNode = function (socket) {
    exports.Nodes.delete(socket.remoteAddress);
};
exports.removeNode = removeNode;
