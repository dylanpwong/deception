# Deception

![](./frontend/public/linkedin.gif)

Based on the social deduction game Deception: Murder in Hong Kong, this online implementation requires players to work together in order
to solve the mystery and determine whom among them is the murderer. 

[Live Site](https://deception.herokuapp.com/#/)

## Table of Contents
* [Technologies](#technologies)
* [Features](#features)
* [Installation](#installation)

## Technologies 

* React (version 16.13.1)
* Node
* Express (version 4.17.1)
* Mongoose (version 5.9.9)
* MongoDB
* Socket.io (version 2.3.0)
* HTML 5
* CSS 3

## Features
### Player Interaction 
The most important aspect of the game revolves around all players working in unison. This functionality is dependent upon the use of 
the library Socket.io in order to utilize websockets to be able to update all players' screens simultaneously. This is done
through Socket.io's Emits, and listen functionality.

``` javaScript
io.sockets.on('connection',function(socket){
        console.log("Connected!")
        socket.id = Math.random();
        socket.username = "";
        SOCKET_LIST[socket.id] = socket;
}
```

Above is a snippet of our server's sockets that are listening and issuing commands. Each socket follows a similiar pattern of listening for a command and then issuing a response to said command, sometimes passing data inbetween. 

``` javaScript
socket.on('playGame', function (data) {
        //   for (const singleSocket in SOCKET_LIST) {
        //         SOCKET_LIST[singleSocket].emit("playGame2",Object.values(SOCKET_LIST).length)
        //   }
        io.sockets.emit("playGame2", Object.values(SOCKET_LIST).length);
        //   socket.emit('playGame2');
        });
```

Here is an example of our server listening for a player to press the "Play Game" button. Once the Play button is hit our server emits a message to all players in the room, signaling all players to have their game started.

```javascript
socket.on("MurderPick", (target) => {
            // console.log("backendMurder")
            io.sockets.emit("MurderPhase",target);
        });
```
Here is where our server handles the different phases of our game. Once our server recieves a 'MurderPick' emit every player will receive a 'MurderPhase" emit. Once this happens, invesitgators will have there screen blocked while the murderer picks a murder weapon and a evidence card.


## Installation 
To run both the frontend and backend servers with one command, run npm run dev. 

Otherwise, use npm run server in the top-level folder and then navigate into the frontend folder of the project and run npm start

