//make a connection between the server and the user

class ChatEngine{
    constructor(chatBoxId,userEmail){
        this.chatBox = $('${chatBoxId}');
        this.userEmail = userEmail;

        this.socket = io.connect('http://localhost:5000')
if (this.userEmail){


    this.connectionHandler();
}

    }
    connectionHandler(){
        //first event is generated which is connect

        this.socket.on('connect',function(){
            console.log('connection established using sockets...!')



        });
    }
}