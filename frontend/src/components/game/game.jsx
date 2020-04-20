import React from 'react';
import WeaponCard from '../weapon_card/weapon_card_container';
import EvidenceCard from '../evidence_card/evidence_card_container';
import EventCard from '../event_card/event_card_container';
import Player from '../player/player_container';
import './game.css';

class Game extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (
             <div className="game-container">
                <div className="game-top-row">
                    <div className="game-player-cards-container">
                        <Player name="DYLAN"/>
                        <div className="player-cards-container">

                        </div>
                    </div>
                    <div className="game-player-cards-container">
                        <Player name="CONNOR"/>
                        <div className="player-cards-container">

                        </div>
                    </div>
                    <div className="game-player-cards-container">
                        <Player name="BRIAN"/>
                        <div className="player-cards-container">

                        </div>
                    </div>
                </div>
                <div className="game-bottom-row">

                </div>
             </div>
         )
     }
}

export default Game;

