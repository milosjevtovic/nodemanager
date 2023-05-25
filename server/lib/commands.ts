import { Command } from '../class/command';
import { Actions } from './actions';

interface Dictionary<Type> {
    [key: string]: Type
}

export const Commands: Dictionary<Command> = {
    exit: new Command({
        description: 'Shuts down the server and quits the application',
        usage: 'Write exit',
        action: Actions.exit
    }),
    commands: new Command({
        description: 'Lists all commands and their description',
        usage: 'Write commands',
        action: Actions.commands
    }),
    execute: new Command({
        description: 'Executes a specific command on all nodes',
        usage: 'Write execute command',
        action: Actions.execute
    }),
    count: new Command({
        description: 'Shows the number of nodes connected',
        usage: 'Write count',
        action: Actions.count
    }),
}

