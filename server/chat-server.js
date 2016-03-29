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

// server.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// })

io.on('connection', (socket) => {

  socket.on('join:room', (data) => {
    var room_name = data.room_name;
    socket.join(room_name);
  });

  socket.on('leave:room', (msg) => {
    msg.text = msg.user + ' has left the room';
    socket.leave(msg.room);
    socket.in(msg.room).emit('message', msg);
  });

  socket.on('send:message', (msg) => {
    socket.in(msg.room).emit('message', msg);
  });

});
