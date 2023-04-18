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

// app.get("/395bc756-d550-496f-a662-5ce1124f2642",(req,res)=>{
// res.sendFile(__dirname + '/index.html');
// })
app.get(`/${ur}`,(req,res)=>{  
res.sendFile(__dirname + '/public/index.html');
})
io.on('connection', (socket) => {
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

  });   
server.listen(3000, () => {
  console.log('listening on *:3000');
});
