import { server } from '../server';
import { Commands } from './commands';
import { printTable } from 'console-table-printer';
import { Nodes } from './nodes';


export const exit = () : void => {
    console.log('[SERVER] TCP server shutting down.')
    server.close();
    
};

export const commands = () : void => {
    let commandTable = [];
    for (let cmd in Commands)
        commandTable.push({"Command": cmd, "Description": Commands[cmd].description});
    printTable(commandTable);
};

export const execute = (input : Array<string>) : void => {
    if (input.length == 0) {
        console.log("[ERROR] Execute command cannot have empty argument");
        return;
    }
    let command = "";
    for (let el of input)
        command = command + " " + el;
    for (let node of Array.from(Nodes.entries())) {
        console.log(`[INFO] Sent command to ${node[0]}`);
        node[1].socket.write(command);
        node[1].socket.pipe(node[1].socket);
    }
};

export const count = () : void => {
    console.log(`Nodes connected: ${Nodes.size}`);
};

export * as Actions from './actions';