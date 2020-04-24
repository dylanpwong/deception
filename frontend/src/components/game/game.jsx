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
             Icount:0,
             gameStarted: false,
             yourCards: false,
        //    socket: openSocket(this.props.location.pathname)
         };
         this.getName = this.getName.bind(this);
         this.gameListenerForMS = this.gameListenerForMS.bind(this);
         this.gameListenerForInv = this.gameListenerForInv.bind(this);
         this.gameStart = this.gameStart.bind(this);
         this.murderPick = this.murderPick.bind(this);
         this.scientistPick = this.scientistPick.bind(this);
         this.investigatorPick = this.investigatorPick.bind(this);
         this.playersOnClick = this.playersOnClick.bind(this);
         this.gameListenerClose=this.gameListenerClose.bind(this);
         this.allListen = this.allListen.bind(this);
         this.allListenForInv = this.allListenForInv.bind(this);
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
        // console.log("MurderPicked!");
        let target = event.currentTarget;
        // debugger
        if((target.getAttribute("name") == this.props.currentUser.player) && this.state.Mcount < 2){
                if (this.state.Mcount < 2) {
                    let target = event.target.getAttribute('id');
                    this.props.socket.emit("MurderPick",target);
                    this.state.Mcount += 1;
                    console.log(`Mcount: ${this.state.Mcount}`)
                    if (this.state.Mcount === 2) {
                        this.props.socket.emit("MurderPhaseOver");
                    }
                } else {//normal stuff
                    if(this.state.Icount < 2){
                        let target = event.target.getAttribute("id");
                        this.props.socket.emit("investigatorPick", target);
                        this.state.Icount += 1;
                    }
                }
        }else{
             if ((this.state.Icount < 2) && this.state.Mcount >= 2) {
               let target = event.target.getAttribute("id");
               this.props.socket.emit("investigatorPick", target);
               this.state.Icount += 1;
             }
        }
        
     }

     scientistPick(event){
         let target = event.target.getAttribute("id");
        
        this.props.socket.emit("scientistPick",target);
     }
     
     investigatorPick(event){
         if(this.state.Icount < 2){
                let target = event.target.getAttribute("id");
                this.props.socket.emit("investigatorPick", target);
                this.state.Icount += 1;
            }
     }

     playersOnClick(yourCards){
        let role = this.props.users[this.props.currentUser.username].role;
        switch(role){
            case "Murderer":
                return this.murderPick;
            case "Scientist":
                return null;
            default:
                return this.investigatorPick;
        }
     }

     gameStart(gameStarted){
         if(!gameStarted){
            this.props.socket.emit("GameStart");
         }
     }

     gameListenerForMS() {
        let role = this.props.users[this.props.currentUser.username].role;
        if (role === 'Murderer' || role === 'Scientist') {
            this.props.socket.on("MurderPhase", (target) => {
                 let targetEle = document.getElementById(target);
                console.log("Inside lstner for murder click");
                targetEle.classList.add("murderPick");
                
            })  
        }
     }
     
     gameListenerForInv() {
         let role = this.props.users[this.props.currentUser.username].role;
         if (role === 'Investigator') {
             this.props.socket.on("RoundStart", () => {//open Model
                this.props.openModal();
             });
            //  this.props.socket.on("RoundEnd", () => { //Murderer picked 2 close model
            //     console.log("MurderPhase Over!")
            //     this.props.closeModal();
            //  });
         }
     }

     gameListenerClose(){
         let role = this.props.users[this.props.currentUser.username].role;
         if (role === 'Investigator') {
              this.props.socket.on("RoundEnd", () => { //Murderer picked 2 close model
                console.log("MurderPhase Over!");
                this.state.gameStarted = true;
                this.props.closeModal();
             });
         }
     }

     gameTest(){
         this.props.socket.on("RoundStart",()=>{
             this.props.openModal();
         })
     }

     allListen(){
        this.props.socket.on("scientistChoose",(target)=>{
            // debugger
            let targetEle = document.getElementById(target);
            targetEle.classList.add("turnBlue");
        });
     }

     allListenForInv(){
         this.props.socket.on("investigatorChoose",target=>{
             let targetEle = document.getElementById(target);
            targetEle.classList.add("turnGreen");
         })
     }

     render() {
         if (this.props.users === undefined || this.props.cards === undefined) {
            return (
                <>
                </>
            )
        }

        {this.gameListenerForInv()}
        {this.gameListenerClose()}
        {this.allListen()}
        {this.allListenForInv()}
        // {this.gameTest.bind(this)()}
        {this.gameListenerForMS()}
        {this.gameStart(this.state.gameStarted)}
        // debugger
        // 
        let role = this.props.users[this.props.currentUser.username].role;
        // role === 'murderer' ? '' : 
        const playerCards = this.props.cards.map((ele,idx)=>{
            // console.log(`ele: ${ele}`)
            // debugger
            // let player = `player${idx + 1}`
            this.state.yourCards = (this.props.currentUser.username === ele.username);
            const cardsContainer = (
               <div className="player-cards-container">
                   <div className="weapon-cards-container">
                       <WeaponCard name={idx +1} playersOnClick={this.playersOnClick()} key={Math.random()} card={ele[0]}/>
                       <WeaponCard name={idx +1} playersOnClick={this.playersOnClick()} key={Math.random()} card={ele[2]}/>
                       <WeaponCard name={idx +1} playersOnClick={this.playersOnClick()} key={Math.random()} card={ele[4]}/>
                       <WeaponCard name={idx +1} playersOnClick={this.playersOnClick()} key={Math.random()} card={ele[6]}/>
                   </div>
                   <div className="evidence-cards-container">
                       <EvidenceCard name={idx +1} playersOnClick={this.playersOnClick()} key={Math.random()}  card={ele[1]}/>
                       <EvidenceCard name={idx +1} playersOnClick={this.playersOnClick()} key={Math.random()}  card={ele[3]}/>
                       <EvidenceCard name={idx +1} playersOnClick={this.playersOnClick()} key={Math.random()}  card={ele[5]}/>
                       <EvidenceCard name={idx +1} playersOnClick={this.playersOnClick()} key={Math.random()}  card={ele[7]}/>
                   </div>
               </div>
            )
            return cardsContainer;
        })
        // debugger
        // let role = this.props.users[this.props.currentUser.username].role;
        console.log(`playerCards: ${playerCards.length}`)
        //  const eventCardsContainer = (
        //      <div className="event-cards-container">
        //         <EventCard playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
        //         <EventCard playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
        //         <EventCard playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
        //         <EventCard playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
        //         <EventCard playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
        //      </div>
        //  )
         const players = [];
         let i = 0;
         for (let user in this.props.users) {
             if (this.props.users[user].role != "Scientist") {
                players.push(
                    <div key={i} className="game-player-cards-container">
                       <Player name={user}/>
                       { playerCards[i] }
                   </div>
                   )
             }
            i++;
         }

         const events = [];
         let j = 0;
         for (let event in this.props.event) {
             if (j > 4) {
                 break;
             }
            
            events.push(
                <div key={Math.random()} className="game-event-cards-container">
                    <h1 className="game-cause-of-death">{event}</h1>
                    <div className="event-cards-container">
                        <EventCard id={`${event}+${this.props.event[event][0]}`}event={this.props.event[event][0]} playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
                        <EventCard id={`${event}+${this.props.event[event][1]}`}event={this.props.event[event][1]} playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
                        <EventCard id={`${event}+${this.props.event[event][2]}`}event={this.props.event[event][2]} playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
                        <EventCard id={`${event}+${this.props.event[event][3]}`}event={this.props.event[event][3]} playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
                        <EventCard id={`${event}+${this.props.event[event][4]}`}event={this.props.event[event][4]} playersOnClick={(role == "Scientist") ? this.scientistPick : null}/>
                    </div>
                </div>
            )
            j++;
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
                        
                        {events}
                    </div>
                </div>
             </>
         )
     }
}

export default Game;

