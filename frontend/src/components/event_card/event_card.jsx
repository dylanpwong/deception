import React from 'react';
import './event_card.css'

class EventCard extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (
            <div id={this.props.id} onClick={this.props.playersOnClick}  className="event-card">{this.props.event}</div>
         )
     }
}

export default EventCard;