import React from 'react';
import './splash.css';
import { Link } from 'react-router-dom';
import openSocket from "socket.io-client";
const myURL = "http://localhost:3000/#/";
// import io from 'socket.io';
// import wsScript from "http://cdn.socket.io/socket.io-1.4.5.js";
class Splash extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          socket: openSocket(myURL),
        };
        this.testButton = this.testButton.bind(this);
        
    }
    socket(){
        // let socket = io();
        // console.log("hello2");
        //<script src="http://cdn.socket.io/socket.io-1.4.5.js"></script>;
        // let socket = io()
            
        // const socket = openSocket();
        //  console.log("hello");
        // const socket = openSocket(myURL, { transports: ["websocket"] });
        // const socket= openSocket(myURL);
        // socket.emit('yay');
            return (
              <>
                {/* <script src="http://cdn.socket.io/socket.io-1.4.5.js"></script>
                <script>
                    var socket=io();
                    socket.emit('yay');
                    </script> */}
              </>
            );

    }

    testButton(){
        this.state.socket.emit("yay")
    }

    componentDidMount() {
        console.log('splash page :)')
    }

    render() {
            // var socket=io();
          return (
              
              <div className="splash-container">
              {/* <script src="http://cdn.socket.io/socket.io-1.4.5.js"></script> */}
                {/* {this.socket.bind(this)()} */}
                <Link className="game-title" to="/">DECEPTION</Link>
                <div className="splash-form">
                    <h1>Enter a username</h1>
                    <input className="splash-input-username" type="text" placeholder="Bob Jenkins"/>
                    {/* <Link onClick={this.testButton} className="splash-play-button" to="/loading">Ready</Link> */}
                    <Link  onClick={this.testButton}to="/" className="splash-play-button"> Test</Link>
                </div>
            </div>
            
        )
    }
}

export default Splash;