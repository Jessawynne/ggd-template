'use strict';

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.render('index')
})

io.on('connection', function(socket){

  socket.on('join:room', function(data){
    var room_name = data.room_name;
    socket.join(room_name);
  });

  socket.on('leave:room', function(msg){
    msg.text = msg.user + ' has left the room';
    socket.leave(msg.room);
    socket.in(msg.room).emit('message', msg);
  });

  socket.on('send:message', function(msg){
    socket.in(msg.room).emit('message', msg);
  });


});
