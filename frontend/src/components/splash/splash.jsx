import React from 'react';
import './splash.css';
import { Link } from 'react-router-dom';
// import io from 'socket.io';
// import openSocket from "socket.io-client";
// import wsScript from "http://cdn.socket.io/socket.io-1.4.5.js";
class Splash extends React.Component {

    socket(){
        // let socket = io();
        // console.log("hello2");
        //<script src="http://cdn.socket.io/socket.io-1.4.5.js"></script>;
        // let socket = io()
            
        // const socket = openSocket();
         console.log("hello");
            return (
              <>
                <script src="http://cdn.socket.io/socket.io-1.4.5.js"></script>
                <script>var socket=io();</script>
              </>
            );

    }

    componentDidMount() {
        console.log('splash page :)')
    }

    render() {
            // var socket=io();
          return (
              
              <div className="splash-container">
              {/* <script src="http://cdn.socket.io/socket.io-1.4.5.js"></script> */}
                {this.socket.bind(this)()}
                <Link className="game-title" to="/">DECEPTION</Link>
                <div className="splash-form">
                    <h1>Enter a username</h1>
                    <input className="splash-input-username" type="text" placeholder="Bob Jenkins"/>
                    <Link className="splash-play-button" to="/loading">Ready</Link>
                </div>
            </div>
            
        )
    }
}

export default Splash;