"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = exports.setTabTitle = exports.count = exports.execute = exports.commands = exports.exit = void 0;
var server_1 = require("../server");
var commands_1 = require("./commands");
var console_table_printer_1 = require("console-table-printer");
var nodes_1 = require("./nodes");
var exit = function () {
    console.log('[SERVER] TCP server shutting down.');
    server_1.server.close();
};
exports.exit = exit;
var commands = function () {
    var commandTable = [];
    for (var cmd in commands_1.Commands)
        commandTable.push({ "Command": cmd, "Description": commands_1.Commands[cmd].description });
    (0, console_table_printer_1.printTable)(commandTable);
};
exports.commands = commands;
var execute = function (input) {
    if (input.length == 0) {
        console.log("[ERROR] Execute command cannot have empty argument");
        return;
    }
    var command = "";
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var el = input_1[_i];
        command = command + " " + el;
    }
    for (var _a = 0, _b = Array.from(nodes_1.Nodes.entries()); _a < _b.length; _a++) {
        var node = _b[_a];
        console.log("[INFO] Sent command to ".concat(node[0]));
        node[1].socket.write(command);
        node[1].socket.pipe(node[1].socket);
    }
};
exports.execute = execute;
var count = function () {
    (0, exports.setTabTitle)();
    console.log("Nodes connected: ".concat(nodes_1.Nodes.size));
};
exports.count = count;
var setTabTitle = function () {
    process.title = "nodemanager | Nodes connected: " + nodes_1.Nodes.size;
};
exports.setTabTitle = setTabTitle;
exports.Actions = require("./actions");
