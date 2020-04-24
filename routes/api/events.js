const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");
const GameEvent = require("../../models/GameEvent")

router.get("/show", (req, res) => {
  Event.find({}).then((event) => res.json(event));
});

router.post("/gameEvent", (req,res) => {
    GameEvent.deleteMany({}).then(() => {
      Event.find({}).then(events => {
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
            i -= 1;
          } else {
            let chosenEvent = eventKeys[randomEvent];
            eventRandom[chosenEvent] = events[0][chosenEvent];
            indexes.push(randomEvent);
          }
        }
        eventsForGame = new GameEvent({
            events: eventRandom
        });
        eventsForGame.save().then(events => res.json(events));
    })
  })
})

module.exports = router;
