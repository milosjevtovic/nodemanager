"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
var commands_1 = require("./commands");
var handle = function (input) {
    var args = input.split(" ");
    var command = args[0];
    if (commands_1.Commands[command] !== undefined)
        commands_1.Commands[command].action(args.slice(1));
    else
        console.log("[ERROR] Commmand \"".concat(command, "\" was not found. Type \"commands\" to see the list of all commands."));
};
exports.handle = handle;
