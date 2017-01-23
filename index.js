import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import syncPilots from './lib/syncPilots';

let app = express();
let server = http.createServer(app);
let io = socketio(server);

let port = 1338;
server.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

syncPilots(io);
