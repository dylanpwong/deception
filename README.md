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
   
        io.sockets.emit("playGame2", Object.values(SOCKET_LIST).length);
      
        });
```

Here is an example of our server listening for a player to press the "Play Game" button. Once the Play button is hit our server emits a message to all players in the room, signaling all players to have their game started.

```javascript
socket.on("MurderPick", (target) => {
            io.sockets.emit("MurderPhase",target);
        });
```
Here is where our server handles the different phases of our game. Once our server recieves a 'MurderPick' emit every player will receive a 'MurderPhase" emit. Once this happens, invesitgators will have there screen blocked while the murderer picks a murder weapon and a evidence card.

```javaScript

    //in game.jsx
  scientistPick(event){
         let target = event.target.getAttribute("id");
        
        this.props.socket.emit("scientistPick",target);
     }

    //in app.js, the server
     socket.on("scientistPick",target=>{
            io.sockets.emit("scientistChoose",target);
        })

    //in game.jsx
        allListen(){
        this.props.socket.on("scientistChoose",(target)=>{
            let targetEle = document.getElementById(target);
            targetEle.classList.add("turnBlue");
        });
     }
```

In the next phase we have our scientist picking clues to help the investigators. Here we have the full cycle. We being with 
the scientist choosing cards on there end, this sends an emit signal to our backend server that accepts a target Id for the element that the scientist choose. The server then emits to all players, and takes the target element passed through by the scientist, and adds a class to turn it blue for all players.

## Installation 
To run both the frontend and backend servers with one command, run npm run dev. 

Otherwise, use npm run server in the top-level folder and then navigate into the frontend folder of the project and run npm start

