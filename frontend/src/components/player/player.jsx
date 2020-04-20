import React from 'react';
import './player.css';

class Player extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (
             <div className="player-container">
                 <h1>{this.props.name}</h1>
             </div>
         )
     }
}

export default Player;