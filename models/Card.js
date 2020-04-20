const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({ // Evidence card or a murder weapon card
  name: {
    type: String,
    required: true,
  },
  type: { //evidence or murder
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Card = mongoose.model("cards", CardSchema);
module.exports = Card;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const TweetSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "users",
//   },
//   text: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Tweet = mongoose.model("tweet", TweetSchema);

// module.exports = Tweet;
