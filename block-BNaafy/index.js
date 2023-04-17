const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// const { Server } = require('socket.io');
// const io = new Server(server)
const io = require('socket.io')(server);


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log(msg);
        io.emit('chat message', msg);
    })
    console.log('a user connected');
    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    // });
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

server.listen(3000, () => {
    console.log('server listiong on 3k');
});