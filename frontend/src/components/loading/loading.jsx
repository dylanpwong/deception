import React from 'react';
import './loading.css';
import { Link } from 'react-router-dom';
// import openSocket from "socket.io-client";
// const myURL = 'http://localhost:3000/#/loading';
// const socket = openSocket(myURL);
class Loading extends React.Component {

    constructor(props){
        super(props)

        this.state = {
          players: [],
        //   socket: openSocket(myURL),
        };
        this.playGame = this.playGame.bind(this);
        this.gameListener=this.gameListener.bind(this);
    }

    // players(){
    //     // debugger
    //     // socket.on("updatedPlayers",()=>{})
    //     let players = this.state.players.map((ele,i)=>{
    //         // debugger
    //         return (
    //           <div key={i} className="loading-username">
    //             <h1>{i + 1}.</h1>
    //             <h1>{ele.username}</h1>
    //           </div>
    //         );
    //     })

    //     return players
    // }

    playerSocket(){
        // let i  = this.state.players.length + 1;
        this.props.socket.on("updatedPlayers",(newUser)=>{
            if (!this.state.players.includes(newUser)) {
                // debugger
                console.log("adding new player")
                this.setState({ players: this.state.players.concat(newUser)})
            };
            // debugger
        })
        // return players;
    }

    playGame(e) {
        // debugger
        e.preventDefault();
        console.log("in Play Game!!!")
        this.props.socket.emit("playGame");
        this.props.updateUsers();
        // this.props.socket.on("playGame2", (data) => {
        //         console.log("recieved playGame2")
        //         console.log(data);
        //         this.props.history.push('/game')
        
        // })
        
    }

    gameListener(){
        this.props.socket.on('playGame2',()=>{
            this.props.history.push('/game')
        })
    }

    componentDidMount() {
        this.props.fetchUsers().then((res) => {
            // debugger
            this.setState({ players: res.users.data})
        });
    }

    render() {
        if (this.props.users === undefined) {
            return (
                <>
                </>
            );
        }
        {this.gameListener();}
        let players = this.state.players.map((player, idx) => {
              return (
              <div key={player.username} className="loading-username">
                <h1>{idx + 1}.</h1>
                <h1>{player.username}</h1>
              </div>
            );
        });
        return (
            <div className="loading-container">
                <Link className="game-title" to="/">DECEPTION</Link>
                <div className="loading-form">
                    <div className="loading-usernames">
                        {players}
                        {this.playerSocket()}
                        {/* <div className="loading-username">
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
                        </div> */}
                    </div>

                    <Link onClick={this.playGame}to="/game" className="loading-play-button">
                        <h1>PLAY</h1>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Loading;