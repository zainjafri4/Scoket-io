const http = require('http')
const app = require('./app')

server = http.createServer(app);

const io = require('socket.io')(server)

io.on('connection', (socket)=>{
    console.log('A User Connected');

    // setTimeout(()=>{
    //     socket.send("Hi, How May I help you today?")
    // },3000)

    setTimeout(()=>{
        socket.emit('firstMessage', {Message : "Hi How may I help?"})
    },3000)
    

    socket.on('disconnect', ()=>{
        console.log('User Dissconnected')
    })
})

server.listen(3000, ()=>{
    console.log('Server Up')
})