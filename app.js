const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const path = require('path');
const WebSocket = require('ws');
const serv = require('http').Server(app);
////////
const User = require('./models/User')
const users = require('./routes/api/users');
const cards = require('./routes/api/cards');
const events = require('./routes/api/events');
//useUnifiedTopology: true
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
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

var SOCKET_LIST = {};

var io = require('socket.io')(serv,{});
io.sockets.on('connection',function(socket){
        console.log("Connected!")
        socket.id = Math.random();
        socket.username = "";
        SOCKET_LIST[socket.id] = socket;

        socket.on('newUser', function(data) {
            // socket.username = data;
            // console.log(socket.username);
            socket.emit("updatedUsers", data)
        })

        socket.on('playGame', function (data) {
          console.log("playGame1");
        //   for (const singleSocket in SOCKET_LIST) {
        //         SOCKET_LIST[singleSocket].emit("playGame2",Object.values(SOCKET_LIST).length)
        //   }
        io.sockets.emit("playGame2", Object.values(SOCKET_LIST).length);
        //   socket.emit('playGame2');
        });

        socket.on("MurderPick", (target) => {
            // console.log("backendMurder")
            io.sockets.emit("MurderPhase",target);
        });

        socket.on("GameStart", () => {
            io.sockets.emit("RoundStart");
        })

        socket.on("MurderPhaseOver", (murderIds) => {
            console.log("murderPhaseDone")
            io.sockets.emit("RoundEnd",murderIds);
        });

        socket.on("scientistPick",target=>{
            io.sockets.emit("scientistChoose",target);
        });

        socket.on("investigatorPick", target => {
            if (true){
                console.log("WIN CHEESE");
                io.sockets.emit("displayWin");
            } else {
                // console.log("turnGreen");
                // io.sockets.emit("investigatorChoose", target);
            }    
        })

        socket.on("winScreen",()=>{
            console.log("win ACTIVATED!!");
            io.sockets.emit("displayWin");
        })

        // socket.on('playGame3', function(data,cb){
        //     for (const singleSocket in SOCKET_LIST) {
        //         SOCKET_LIST[singleSocket].emit("playGame2",Object.values(SOCKET_LIST).length)
        //   }
        // })

        socket.on("updatedPlayersSend",(username) => {
            console.log(`socket_size: ${Object.values(SOCKET_LIST).length}`)

        //      for (const singleSocket in SOCKET_LIST) {
        //         SOCKET_LIST[singleSocket].emit("updatedPlayers",username)
        //   }
            io.sockets.emit("updatedPlayers", username)
        });
        socket.on("getName",function(data){
            socket.emit("recieveName", socket.username);
        })

        socket.on('disconnect', function() {
            User.deleteMany({}).then(console.log("Isaac Sucks eggs"));
            delete SOCKET_LIST[socket.id]
        })

});

// setInterval(()=>{

// })

// setInterval(()=>{

// })

// setInterval(()=>{

// })

// setInterval(()=>{

// })

// setInterval(()=>{

// })

// setInterval(function(){

// })