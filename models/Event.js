const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  Location: {
    type: Array,
    required: true,
  },

//   causeofDeath: {
//     type: String,
//     required: true,
//   },

//   murdersPersonality:{
//       type: String,
//       required: true,
//   },

//   noticedByBystander:{
//       type: String,
//       required: true,
//   },

//   traceAtTheScene:{
//       type: String,
//       required: true,
//   },

//   socialRelationship:{
//       type: String,
//       required: true,
//   },

//   victimsIdentiy:{
//       type: String,
//       required: true,
//   },

//   stateOfScene:{
//       type: String,
//       required: true
//   },

//   inProgress:{
//       type: String,
//       required: true,
//   },

//   weather: {
//     type: String,
//     required: true,
//   },

//   corpseCondition: {
//       type: String,
//       required: true
//   },
  
//   hintOnCorpse: {
//       type: String,
//       required: true 
//   },

//   motiveOfCrime: {
//       type: String, 
//       required: true
//   },

//   durationOfCrime: {
//       type: String, 
//       required: true
//   },

//   evidenceLeftBehind: {
//       type: String,
//       required: true
//   },

//   victimsClothes: {
//       type: String,
//       required: true
//   },

//   suddenIncident: {
//       type: String,
//       required: true
//   },
  
//   victimsBuild: {
//       type: String,
//       required: true 
//   },

//   victimsExpression: {
//       type: String,
//       required: true
//   },
  
  date: {
    type: Date,
    default: Date.now,
  },
});

const Event = mongoose.model("events", EventSchema);
module.exports = Event;
