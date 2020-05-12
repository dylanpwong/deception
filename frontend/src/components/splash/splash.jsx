import React from 'react';
import './splash.css';
import { Link } from 'react-router-dom';
// import openSocket from 'socket.io-client';
// const socket = openSocket("http://localhost:3000/#/");
class Splash extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            // socket: openSocket(this.props.location.pathname)/*{transports: ["websocket"]})*/
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        return (e) => this.setState({ username: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        // this.state.socket.emit("newUser",this.state.username);
        // this.state.socket.emit("")
        let user = {
            username: this.state.username
        }
        this.props.createUser(user).then((res) => {
            this.props.socket.emit("updatedPlayersSend",user);
            
           return this.props.history.push('/loading')
        })
    }
    

    render() {
        return (
            <>
                <Link to="/demo">
                    <div className="demo-button">
                        <h1>DEMO</h1>
                    </div>
                </Link>
                <div className="splash-container">
                    <Link className="game-title" to="/">DECEPTION</Link>
                    <div className="splash-form">
                        
                        <h1>Enter a username</h1>

                            <input onChange={this.update()} className="splash-input-username" value={this.state.username} type="text" placeholder="Bob Jenkins"/>    
                            <Link onClick={this.handleSubmit} className="splash-play-button" to="/loading">Ready</Link>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Splash;