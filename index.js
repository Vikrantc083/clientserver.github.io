const express = require('express');
const app = express();
const { v4: uuidV4 } = require('uuid');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { log } = require('console');
const io = new Server(server);
ur=uuidV4();
app.get('/', (req, res) => {
    
    res.redirect(`/${ur}`); 

});

// app.get("/395bc756-d550-496f-a662-5ce1124f2642",(req,res)=>{
// res.sendFile(__dirname + '/index.html');
// })
app.get(`/${ur}`,(req,res)=>{
res.sendFile(__dirname + '/index.html');
})
// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//   });
// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       console.log('message: ' + msg);
//     });
//   });
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});