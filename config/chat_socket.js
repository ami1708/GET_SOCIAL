module.exports.chatSockets = function(socketServer){

    let io = require('socket.io')(socketServer)

    io.sockets.on('connection',function(sockets){

        console.log('new connection received',socket.id);
    })
}

