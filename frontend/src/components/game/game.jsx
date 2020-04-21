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

         const eventCardsContainer = (
             <div className="event-cards-container">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
             </div>
         )
         
         return (
             <>
                <div className="game-player-role">
                    <h1>YOU ARE THE MURDERER</h1>
                </div>
                <div className="game-container">
                    <div className="game-left-column">
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
                    <div className="game-right-column">
                        <div className="game-event-cards-container">
                            <h1 className="game-cause-of-death">Cause of Death</h1>
                            { eventCardsContainer }
                        </div>
                        <div className="game-event-cards-container">
                            <h1 className="game-location">Location</h1>
                            { eventCardsContainer }
                        </div>
                        <div className="game-event-cards-container">
                            <h1 className="game-victim-identity">Victim's Identity</h1>
                            { eventCardsContainer }
                        </div>
                        <div className="game-event-cards-container">
                            <h1 className="game-noticed-by-bystander">Noticed by Bystander</h1>
                            { eventCardsContainer }
                        </div>
                        <div className="game-event-cards-container">
                            <h1 className="game-victim-build">Victim's Build</h1>
                            { eventCardsContainer }
                        </div>
                    </div>
                </div>
             </>
         )
     }
}

export default Game;

