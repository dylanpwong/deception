const express = require("express");
const router = express.Router();
const Card = require("../../models/Card");
const Event = require("../../models/Event");
const User = require("../../models/User");

router.get('/index',(req,res)=>{
    Card.find({}).then((cards)=>res.json(cards))
})

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