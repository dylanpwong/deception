const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameEventSchema = new Schema({
    events: {
        type: Object,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const GameEvent = mongoose.model('gameevents', GameEventSchema);
module.exports = GameEvent;