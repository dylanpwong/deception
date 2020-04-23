import React from 'react';
import './weapon_card.css'

class WeaponCard extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (
             <div className="weapon-card">{this.props.card.name}</div>
         )
     }
}

export default WeaponCard;