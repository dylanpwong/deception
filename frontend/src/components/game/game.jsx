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

         const cardsContainer = (
            <div className="player-cards-container">
                <div className="weapon-cards-container">
                    <WeaponCard />
                    <WeaponCard />
                    <WeaponCard />
                    <WeaponCard />
                </div>
                <div className="evidence-cards-container">
                    <EvidenceCard />
                    <EvidenceCard />
                    <EvidenceCard />
                    <EvidenceCard />
                </div>
            </div>
         )
         
         return (
             <div className="game-container">
                <div className="game-top-row">
                    <div className="game-player-cards-container">
                        <Player name="DYLAN"/>
                        { cardsContainer }
                    </div>
                    <div className="game-player-cards-container">
                        <Player name="CONNOR"/>
                        { cardsContainer }
                    </div>
                    <div className="game-player-cards-container">
                        <Player name="BRIAN"/>
                        { cardsContainer }
                    </div>
                </div>
                <div className="game-bottom-row">

                </div>
             </div>
         )
     }
}

export default Game;

