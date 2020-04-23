const express = require("express");
const router = express.Router();
const Card = require("../../models/Card");
const Event = require("../../models/Event");
const User = require("../../models/User");
const ShuffledCard = require('../../models/ShuffledCard');

router.get('/index',(req,res) => { 
    Card.find({}).then((cards) => res.json(cards))
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
// router.delete("/gameOver", (req, res) => {
//   User.deleteMany({}).then((user) => res.json(user));
// });

router.post('/dealHand',(req,res) => {
    ShuffledCard.deleteMany({}).then(() => {
        Card.find({}).then(cardsObj => {
        let cardArr = Object.values(cardsObj);
        let hand1 =  shuffle(cardArr);
            let hand2 = shuffle(cardArr);
            let hand3 = shuffle(cardArr);
            let hand4 = shuffle(cardArr);
        let playersHand = new ShuffledCard({
            player1: hand1,
            player2: hand2,
            player3: hand3,
            player4: hand4
        })
            playersHand.save().then((shuffled) => res.json(shuffled))
                    .catch((err) => console.log(err));
      
        })
    })
})

const randomEvents = (events) => {
//   console.log(events);
  let eventKeys = Object.keys(events[0]._doc);
//   let objects = events[0]._doc;
//   console.log(`event[0]: ${events[0]}`)
//   console.log(`EventKeys: ${eventKeys}`);
  let eventRandom = {};
  eventRandom["location"] = events[0]["Location"];
  eventRandom["causeOfDeath"] = events[0]["causeOfDeath"];
  let indexes = [];
  for (let i = 0; i < 3; i++) {
    let randomEvent = Math.floor(Math.random() * (eventKeys.length - 6) + 2);
    if (indexes.includes(randomEvent)) { 
        i -= 1 ;
    } else {
        let chosenEvent = eventKeys[randomEvent];
        eventRandom[chosenEvent] = events[0][chosenEvent];
        indexes.push(randomEvent); 
    }
  }
  return eventRandom;
};

router.get('/start', (req, res) => {
    ShuffledCard.find({}).then((cards) => {
        User.find({}).then((users) => {
            Event.find({}).then((events) => {
                const all = {
                    cards: cards,
                    users: users,
                    events: randomEvents(events)
                    }
                res.json(all);
            })
        })
    })
})

router.get('/getHands', (req, res) => {
    ShuffledCard.find().then((cards) => {
        res.json(cards);
    })
})





module.exports = router;