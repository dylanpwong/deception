import React from 'react';
import './evidence_card.css';

class EvidenceCard extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
        //  debugger
         return (
             <div name = {`${this.props.name}`} onClick={this.props.playersOnClick} id={`${this.props.card._id}`} className="evidence-card">{this.props.card.name}</div>
         )
     }
}

export default EvidenceCard;