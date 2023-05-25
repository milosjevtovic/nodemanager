import * as net from 'net';
import { Node } from '../class/node';

export var Nodes = new Map<string, Node>();

export const addNode = ( socket: net.Socket) : void => {
    let newNode = new Node(socket);
    Nodes.set(newNode.address, newNode);
};

export const removeNode = ( socket: net.Socket) : void => {
    Nodes.delete(socket.remoteAddress as string);
}