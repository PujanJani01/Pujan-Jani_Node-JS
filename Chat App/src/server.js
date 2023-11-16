const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('user-message', (msg) => {
        io.emit('message', msg);
    })
})

app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
})


server.listen(3000, () => console.log('Server is running on port 3000'));