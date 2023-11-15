const http = require('http')
const app = require('./app')

server = http.createServer(app);

const io = require('socket.io')(server)

// let full = 0;
// let cnsp = io.of('/custom-space');

let users = 0;
let roomno = 1;

io.on('connection', (socket) => {
    console.log('A User Connected');

    // socket.join('Room No-' + roomno);
    // io.sockets.in('Room No-' + roomno).emit('roomConnected', 'Room No-'+roomno);

    // users++;

    // if(users >= 2){
    //     roomno++
    //     users=0;
    // }

    // users++;
    // socket.emit("userConnected", { Message: " Hi, welcome" })    
    // socket.broadcast.emit("userConnected", { Message: users + " user(s) are connected" })

    // setTimeout(()=>{
    //     socket.send("Hi, How May I help you today?")
    // },3000)

    // setTimeout(()=>{
    //     socket.emit('firstMessage', {Message : "Hi How may I help?"})
    // },3000)

    // socket.on('clientSide', (data)=>{
    //     console.log(data)
    // })

    socket.on('disconnect', () => {
        console.log('User Dissconnected')

        // users--;
        //  socket.broadcast.emit("userConnected", { Message: users + " user(s) are connected" })

    })
})

server.listen(3000, () => {
    console.log('Server Up')
})