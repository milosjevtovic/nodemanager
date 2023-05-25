import * as net from 'net';
import * as dotenv from 'dotenv';
import * as readline from 'readline';
import { handle } from './lib/handler';
import { addNode, removeNode } from './lib/nodes';

dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const server = net.createServer((socket : any) : void => {
    /*
    socket.on('data', (data : string) : void => {
        console.log(`Server: Received ${data}`);
        socket.write(data);
        socket.pipe(socket);
    }); */
    socket.on('end', () : void => {
        removeNode(socket);
        console.log(`[DISCONNECT] Node ${socket.remoteAddress} has disconnected`);
    });
});

server.on('connection', (socket : net.Socket) : void => {
    addNode(socket);
    console.log(`[CONNECT] Node ${socket.remoteAddress} has connected`);
});

server.on('error', (err : any) : void => {
    throw err;
});

server.on('close', () : void => {
    process.exit(1);
});

server.on('listening', () : void => {
    const address = server.address() as net.AddressInfo;
    console.log(`[SERVER] TCP server is running on ${address.address}:${address.port}`);
    commandPrompt();
});

server.listen(port as number, host);

const commandPrompt = () : void => {
    rl.question('command> ', (input:string) : void => {
        handle(input);
        commandPrompt();
    });
};

