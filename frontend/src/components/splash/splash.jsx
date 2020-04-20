import React from 'react';
import './splash.css'

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-container">
                <h1>Enter a username</h1>
                <input className="splash-input-username" type="text" name="" id=""/>
                <button className="splash-play-button">Play</button>
            </div>
        )
    }
}

export default Splash;