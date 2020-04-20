import React from 'react';
import WeaponCard from '../weapon_card/weapon_card_container';

class Game extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (
             <>
                <WeaponCard />
                <WeaponCard />
                <WeaponCard />
                <WeaponCard />
                <WeaponCard />
             </>
         )
     }
}

export default Game;

