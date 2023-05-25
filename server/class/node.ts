import * as net from 'net';

export class Node {
    address!: string;
    connectedAt!: Date;
    group!: string;
    socket!: net.Socket;

    constructor(socket: net.Socket) {
        this.socket = socket;
        this.address = socket.remoteAddress as string;
        this.group = "all"; // Temporarily 
    }
}