"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
var command_1 = require("../class/command");
var actions_1 = require("./actions");
exports.Commands = {
    exit: new command_1.Command({
        description: 'Shuts down the server and quits the application',
        usage: 'Write exit',
        action: actions_1.Actions.exit
    }),
    commands: new command_1.Command({
        description: 'Lists all commands and their description',
        usage: 'Write commands',
        action: actions_1.Actions.commands
    }),
    execute: new command_1.Command({
        description: 'Executes a specific command on all nodes',
        usage: 'Write execute command',
        action: actions_1.Actions.execute
    }),
    count: new command_1.Command({
        description: 'Shows the number of nodes connected',
        usage: 'Write count',
        action: actions_1.Actions.count
    }),
};
