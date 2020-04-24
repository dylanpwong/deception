const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShuffledCardSchema = new Schema({
  // Evidence card or a murder weapon card
  player1: {
    type: Array,
    required: true,
  },
  player2: {
    //evidence or murder
    type: Array,
    required: true,
  },
  player3: {
    type: Array,
    required: true,
  },
  player4: {
    type: Array,
    required: true,
  },
  player5:{
    type: Array,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ShuffledCard = mongoose.model("shuffledcards", ShuffledCardSchema);
module.exports = ShuffledCard;
