import React from 'react';
import './splash.css';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        return (e) => this.setState({ username: e.target.value })
    }

    handleSubmit(e) {
        this.props.createUser(this.state).then(() => console.log("broken"))
    }

    render() {
        return (
            <div className="splash-container">
                <Link className="game-title" to="/">DECEPTION</Link>
                <div className="splash-form">
                    <h1>Enter a username</h1>
                    
                        <input onChange={this.update()} className="splash-input-username" value={this.state.username} type="text" placeholder="Bob Jenkins"/>    
                        <Link onClick={this.handleSubmit} className="splash-play-button" to="/loading">Ready</Link>
                </div>
            </div>
            
        )
    }
}

export default Splash;