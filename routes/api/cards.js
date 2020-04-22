const express = require("express");
const router = express.Router();
const Card = require("../../models/Card");
const Event = require("../../models/Event");
const User = require("../../models/User");

router.get('/index',(req,res)=>{
    Card.find({}).then((cards)=>res.json(cards))
})

const shuffle = (cards) => {
        let weaponCards = cards.slice(0, (cards.length / 2));
        let evidenceCards = cards.slice(cards.length / 2);
        let playerCards = [];
            for (let i = 0; i < 4; i++) {
                let randomWeapon = Math.floor(Math.random() * weaponCards.length);
                let randomEvidence = Math.floor(Math.random() * evidenceCards.length);
                playerCards.push(weaponCards[randomWeapon]) 
                playerCards.push(evidenceCards[randomEvidence]);
                weaponCards.splice(randomWeapon,1);
                evidenceCards.splice(randomEvidence,1);
                cards.splice(randomWeapon, 1);
                cards.splice(randomEvidence + (cards.length / 2), 1);
            }
        return playerCards;
}

router.get('/getHand',(req,res)=>{
    
    Card.find({}).then(cardsObj => {
       let cardArr = Object.values(cardsObj);
       let hand1 =  shuffle(cardArr);
       
        let hand2 = shuffle(cardArr);
        let hand3 = shuffle(cardArr);
        let hand4 = shuffle(cardArr);
       let playersHand ={
           player1: hand1,
           player2: hand2,
           player3: hand3,
           player4: hand4
       }
       res.json(playersHand);
    })
        

    })
    
    // const hands = {
    //     player1: hand1,
    //     player2:
    // }


router.get('/start', (req, res) => {
    Card.find({}).then((cards) => {
        User.find({}).then((users) => {
            Event.find({}).then((events) => {
                const all = {
                    cards: cards,
                    users: users,
                    events: events
                    }
                res.json(all);
            })
        })
    })
})





module.exports = router;