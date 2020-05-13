import React from 'react';
import { Link } from 'react-router-dom';
import './lose.css';
import '../game/game.css';

class Lose extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Link to="/" className="game-redirect-home">Go Back to Home</Link>
                <h1 className="lose-text">MURDERER WINS</h1>
            </>
        )
    }
}

export default Lose;