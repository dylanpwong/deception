import React from 'react';
import './evidence_card.css';

class EvidenceCard extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (
             <div className="evidence-card">{this.props.card.name}</div>
         )
     }
}

export default EvidenceCard;