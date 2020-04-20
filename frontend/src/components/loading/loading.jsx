import React from 'react';
import './loading.css';
import { Link } from 'react-router-dom';


class Loading extends React.Component {
    render() {
        return (
            <div className="loading-container">
                <Link className="game-title" to="/">DECEPTION</Link>
                <div className="loading-form">
                    <div className="loading-usernames">
                        <div className="loading-username">
                            <h1>1.</h1>
                            <h1>Connor</h1>
                        </div>
                        <div className="loading-username">
                            <h1>2.</h1>   
                            <h1>Dylan</h1>
                        </div>
                        <div className="loading-username">
                            <h1>3.</h1>
                            <h1>Brian</h1>
                        </div>
                        <div className="loading-username">
                            <h1>4.</h1>
                            <h1>Isaac</h1>
                        </div>
                    </div>

                    <Link to="/game" className="loading-play-button">
                        <h1>PLAY</h1>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Loading;