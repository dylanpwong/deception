import React from 'react';
import './weapon_card.css'

class WeaponCard extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
        //  console.log(this.props.card._id)
         return (
             <div name={`${this.props.name}`} onClick={this.props.playersOnClick} id={`${this.props.card._id}`} className={`weapon-card`}>{this.props.card.name}</div>
         )
     }
}

export default WeaponCard;