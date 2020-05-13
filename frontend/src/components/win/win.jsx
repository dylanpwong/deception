import React from 'react';
import { Link } from 'react-router-dom';
import './win.css';
import '../game/game.css';

class Win extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Link to="/" className="game-redirect-home">Go Back to Home</Link>
                <h1 className="win-text">INVESTIGATORS WIN</h1>
            </>
        )
    }
}

export default Win;