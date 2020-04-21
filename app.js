const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const http = require('http');
const serv = require('http').Server(app);
////////
const User = require('./models/User');
const users = require('./routes/api/users');
const cards = require('./routes/api/cards');
const events = require('./routes/api/events');
//useUnifiedTopology: true
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

// app.get('/',(req,res)=>{
//     const user = new User({
//        username: "player1",
//        role: "Investogator", 
//     })
//     user.save()
//     res.send("User saved!")
// })

app.use("/api/users",users);
app.use("/api/cards",cards);
app.use("/api/events",events);

const port = process.env.PORT || 5000;


serv.listen(port, () => { console.log(`Listening on port ${port}`) });

// serv.listen(3000);
 let io = require('socket.io')(serv,{});
 io.sockets.on('connection',function(socket){
     console.log("Isaac Connected! ~yay");
     socket.on('yay',()=>{
         console.log("Big Yay");
     })
 })
// const server = http.createServer(app);

// const wss = new WebSocket.Server({server});

// wss.on('connection',({ws: WebSocket})=>{
//     // ws.on('happy',()=>{
//     //     console.log("Issac");
//     // })
//     console.log("connected Isaac!");
// });
// var io = require('socket.io')(app,{});
// io.sokects.on('connection',function(sockets){
//     console.log('socket connection')
// })

// socket.on('happy',()=>{
//     console.log('Isaac');
// })