import React from 'react';
import './splash.css'

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-container">
                <div className="splash-game-title">
                    <h1>DECEPTION</h1>
                </div>
                <div className="splash-form">
                    <h1>Enter a username</h1>
                    <input className="splash-input-username" type="text" placeholder="Bob Jenkins"/>
                    <button className="splash-play-button">Play</button>
                </div>
            </div>
            
        )
    }
}

export default Splash;