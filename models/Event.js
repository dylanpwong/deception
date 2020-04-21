const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  Location: {
    type: Array,
    required: true,
  },

  causeOfDeath: {
    type: Array,
    required: true,
  },

  murdersPersonality:{
    type: Array,   
    required: true,
  },

  noticedByBystander:{
      type: Array,
      required: true,
  },

  traceAtTheScene:{
      type: Array,
      required: true,
  },

  socialRelationship:{
      type: Array,
      required: true,
  },

  victimsIdentity:{
      type: Array,
      required: true,
  },

  stateOfScene:{
      type: Array,
      required: true
  },

  // inProgress:{
  //     type: Array,
  //     required: true,
  // },

  weather: {
    type: Array,
    required: true,
  },

  corpseCondition: {
      type: Array,
      required: true
  },
  
  hintOnCorpse: {
      type: Array,
      required: true 
  },

  motiveOfCrime: {
      type: Array, 
      required: true
  },

  durationOfCrime: {
      type: Array, 
      required: true
  },

  evidenceLeftBehind: {
      type: Array,
      required: true
  },

  victimsClothes: {
      type: Array,
      required: true
  },

  suddenIncident: {
      type: Array,
      required: true
  },
  
  victimsBuild: {
      type: Array,
      required: true 
  },

  victimsExpression: {
      type: Array,
      required: true
  },
  
  date: {
    type: Date,
    default: Date.now,
  },
});

const Event = mongoose.model("events", EventSchema);
module.exports = Event;
