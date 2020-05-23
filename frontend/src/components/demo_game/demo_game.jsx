import React from 'react';
import './demo_game.css';
import '../game/game.css';
import '../event_card/event_card.css';
import '../weapon_card/weapon_card.css';
import '../evidence_card/evidence_card.css';
import '../player/player.css';
import { Link } from 'react-router-dom';

class DemoGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 2,
            selected: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({ count: this.state.count -= 1 });
        this.state.selected.push(e.target.innerHTML);
        e.target.classList.add("evidence-selected");
        e.target.classList.add("disable-click");
    }

    render() {
        if (this.state.count === 0 && (!this.state.selected.includes("Knife") || !this.state.selected.includes("Cheese"))) {
            return (
                <>
                    <h1 className="demo-game-over">MURDERER WINS</h1>
                    <Link to="/" className="game-redirect-home">Go Back to Home</Link>
                </>
            )
        } else if (this.state.count === 0 && this.state.selected.includes("Knife") && this.state.selected.includes("Cheese")) {
            return (
                <>
                    <h1 className="demo-victory">INVESTIGATORS WIN</h1>
                    <Link to="/" className="game-redirect-home">Go Back to Home</Link>
                </>
            )
        }
        return (
            <> 
                <div className="game-player-role">
                    <Link to="/" className="game-redirect-home">Go Back to Home</Link>
                    <h1>Role: Investigator</h1>
                    <div className="instructions">Instructions</div>
                    <div className="instructions-dropdown">
                        <p className="instructions-text">When the game starts, roles will be randomly assigned to the players. 
                        <br/> 
                        <br/>There will be a <span className="murderfont">murderer</span>, a <span className="scientist">scientist</span>, and the rest will be <span className="investigator">investigators</span>. 
                        <br/>
                        <br/>Evidence and murder cards will be dealt to everyone except the <span className="scientist">scientist</span>. 
                        <br/>
                        <br/>The <span className="murderfont">murderer</span> selects one evidence and one murder card from their hand to describe the murder. 
                        <br/>
                        <br/>The <span className="scientist">scientist</span>, the only other person who sees this take place, then chooses event cards that correlate with the cards chosen. 
                        <br/>
                        <br/>Using these clues, it is up to the <span className="investigator">investigators</span> to try to deduce who did the crime and how it was done, while the <span className="murderfont">murderer</span> attempts to throw them off their tracks.</p>
                        <br/>
                        <p className="instructions-text"><span id="instructions-note">Note:</span> The amount of cards are reduced in the demo for the sake of simplicity.</p>
                    </div>
                </div>
                <div className="game-container">
                    <div className="game-left-column">
                        <div className="game-player-cards-container">
                            <div className="player-container">DYLAN</div>
                            <div className="player-cards-container">
                                <div className="weapon-cards-container">
                                    <div onClick={this.handleClick} className="weapon-card">Knife</div>
                                </div>
                                <div className="evidence-cards-container">
                                    <div onClick={this.handleClick} className="evidence-card">Cheese</div>
                                </div>                                 
                            </div>
                        </div>
                        <div className="game-player-cards-container">
                            <div className="player-container">CONNOR</div>
                            <div className="player-cards-container">
                                <div className="weapon-cards-container">
                                    <div onClick={this.handleClick} className="weapon-card">Gun</div>
                                </div>
                                <div className="evidence-cards-container">
                                    <div onClick={this.handleClick} className="evidence-card">Bullet</div>
                                </div>                                 
                            </div>
                        </div>
                        <div className="game-player-cards-container">
                            <div className="player-container">BRIAN</div>
                            <div className="player-cards-container">
                                <div className="weapon-cards-container">
                                    <div onClick={this.handleClick} className="weapon-card">Baseball Bat</div>
                                </div>
                                <div className="evidence-cards-container">
                                    <div onClick={this.handleClick} className="evidence-card">Glass</div>
                                </div>                                 
                            </div>
                        </div>
                    </div>
                    <div className="game-right-column">
                        <div className="game-event-cards-container">
                            <h1 className="game-cause-of-death">Location</h1>
                            <div className="event-cards-container">
                                <div className="event-card event-selected">Kitchen</div>
                                <div className="event-card">School</div>
                                <div className="event-card">Park</div>
                                <div className="event-card">Pool</div>
                                <div className="event-card">Airport</div>
                            </div>
                        </div>
                        <div className="game-event-cards-container">
                            <h1 className="game-cause-of-death">Time</h1>
                            <div className="event-cards-container">
                                <div className="event-card">Dawn</div>
                                <div className="event-card">Sunrise</div>
                                <div className="event-card">Midday</div>
                                <div className="event-card">Afternoon</div>
                                <div className="event-card event-selected">Night</div>
                            </div>
                        </div>
                        <div className="game-event-cards-container">
                            <h1 className="game-cause-of-death">Cause of Death</h1>
                            <div className="event-cards-container">
                                <div className="event-card">Poison</div>
                                <div className="event-card">Explosion</div>
                                <div className="event-card event-selected">Bleeding</div>
                                <div className="event-card">Crushed</div>
                                <div className="event-card">Drowning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



export default DemoGame;