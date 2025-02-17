const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve an HTML page that includes the Socket.IO client script
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Socket.IO Test</title>
            <script src="/socket.io/socket.io.js"></script>
            <script>
                var socket = io();  // This line connects to the Socket.IO server
                socket.on('connect', function() {
                    console.log('Connected to server via Socket.IO!');
                });
            </script>
        </head>
        <body>
            Hello World! Check the browser console for Socket.IO connection status.
        </body>
        </html>
    `);
});

io.on('connection', (socket) => {
    console.log('A user connected'); // This should log in the server console
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

