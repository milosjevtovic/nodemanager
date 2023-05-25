"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(socket) {
        this.socket = socket;
        this.address = socket.remoteAddress;
        this.group = "all"; // Temporarily 
    }
    return Node;
}());
exports.Node = Node;
