import React from 'react';
import './splash.css';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-container">
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