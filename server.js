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
app.use(express.static(__dirname + '/public'));


app.get(`/${ur}`,(req,res)=>{  
res.sendFile(__dirname + '/public/index.html');
})
io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId, use) => {
    console.log('joined room with id = ' + roomId);
    socket.join(roomId);
    socket.on('receiver', (receiver_name) => {
      io.to(roomId).emit('already_present_user', receiver_name);
    });
    socket.broadcast.to(roomId).emit('user-connected', userId, use);
    socket.on('red', () => {
      console.log("Server red") 
      io.emit('press a');
    });
    socket.on('blue', () => {
      console.log("Server blue") 
      io.emit('press s');
    });
    socket.on('green', () => {
      console.log("Server green") 
      io.emit('press d');
    });
    socket.on('yellow', () => {
      console.log("Server yellow") 
      io.emit('press f');
    });

  }); });  
  server.listen(process.env.PORT || 3000);
