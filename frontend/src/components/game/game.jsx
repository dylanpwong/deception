import React from 'react';
import WeaponCard from '../weapon_card/weapon_card_container';
import EvidenceCard from '../evidence_card/evidence_card_container';
import EventCard from '../event_card/event_card_container';
import Player from '../player/player_container';
import './game.css';
// import openSocket from 'socket.io-client';
class Game extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             Mcount: 0,
             Icount:0
        //    socket: openSocket(this.props.location.pathname)
         };
         this.getName = this.getName.bind(this);
         this.gameListenerForMS = this.gameListenerForMS.bind(this);
         this.gameListenerForInv = this.gameListenerForInv.bind(this);
         this.gameStart = this.gameStart.bind(this);
         this.murderPick = this.murderPick.bind(this);
         this.scientistPick = this.scientistPick.bind(this);
         this.investigatorPick = this.investigatorPick.bind(this);
     }


     getName() {
        //  let myName;
        //  this.state.socket.emit('getName');
        //  this.state.socket.on('recieveName',function(data){
        //      myName = data;
        //  });
        //  console.log(`myName: ${myName}`)
        //  return myName;
     }


     componentDidMount() {
        this.props.fetchAll().then((res)=>{
            // debugger
        });
            // debugger

      
     }

     murderPick(event){ //on click
        if (this.state.Mcount < 2) {
            let target = event.target;
            this.props.socket.emit("MurderPick", target);
            this.state.Mcount += 1;
            if (this.state.Mcount === 2) {
                this.props.socket.emit("MurderPhaseOver")
            }
        } else {//normal stuff

        }
     }

     scientistPick(event){
         let target = event.target;

         if (target.classList["ScientistPick"]){
            target.classList.remove("ScientistPick");
         } else {
            target.classList.add("ScientistPick"); //should change to blue
         }
     }
     
     investigatorPick(event){
        let target = event.target;
        if(this.state.Icount < 2){
            target.classList.add("InvestigatorPick"); // class that turns it green
            this.state.Icount += 1;
        }
     }

     playersOnClick(event){
        let role = this.props.users[this.props.currentUser.username].role;

        switch(role){
            case "Murderer":
                return this.murderPick;
            case "Scientist":
                return this.scientistPick;
            default:
                return this.investigatorPick;
        }
     }

     gameStart(){
         this.props.socket.emit("GameStart");
     }

     gameListenerForMS() {
        let role = this.props.users[this.props.currentUser.username].role;
        if (role === 'Murderer' || role === 'Scientist') {
            this.props.socket.on("MurderPhase", (target) => {
                target.classList.add('MurderPick')
            })  
        }
     }
     
     gameListenerForInv() {
         let role = this.props.users[this.props.currentUser.username].role;
         if (role === 'Investigator') {
             this.props.socket.on("RoundStart", () => {//open Model
                this.props.openModal();
             });
             this.props.socket.on("RoundEnd", () => { //Murderer picked 2 close model
                this.props.closeModal();
             });
         }
     }

     gameTest(){
         this.props.socket.on("RoundStart",()=>{
             this.props.openModal();
         })
     }

     render() {
         if (this.props.users === undefined || this.props.cards === undefined) {
            return (
                <>
                </>
            )
        }
        // {this.gameListenerForInv()}
        {this.gameTest.bind(this)()}
        {this.gameStart()}
        // {this.gameListenerForMS()}
        // debugger
        const playerCards = this.props.cards.map((ele,idx)=>{
            // console.log(`ele: ${ele}`)
            // debugger
            // let player = `player${idx + 1}`
            // debugger
            const cardsContainer = (
               <div className="player-cards-container">
                   <div className="weapon-cards-container">
                       <WeaponCard key={Math.random()} card={ele[0]}/>
                       <WeaponCard key={Math.random()} card={ele[2]}/>
                       <WeaponCard key={Math.random()} card={ele[4]}/>
                       <WeaponCard key={Math.random()} card={ele[6]}/>
                   </div>
                   <div className="evidence-cards-container">
                       <EvidenceCard key={Math.random()}  card={ele[1]}/>
                       <EvidenceCard key={Math.random()}  card={ele[3]}/>
                       <EvidenceCard key={Math.random()}  card={ele[5]}/>
                       <EvidenceCard key={Math.random()}  card={ele[7]}/>
                   </div>
               </div>
            )
            return cardsContainer;
        })
        // debugger
        console.log(`playerCards: ${playerCards.length}`)
         const eventCardsContainer = (
             <div className="event-cards-container">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
             </div>
         )

         const players = [];
         let i = 0;
         for (let user in this.props.users) {
             players.push(
             <div key={i} className="game-player-cards-container">
                <Player name={user}/>
                { playerCards[i] }
            </div>
            )
            i++;
         }
         
         return (
             <>
                <div className="game-player-role">
                    {/* {this.getName()} */}
                    <h1>Role: &nbsp; {this.props.users[this.props.currentUser.username].role}</h1>
                </div>
                <div className="game-container">
                    <div className="game-left-column">
                        {players}
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

