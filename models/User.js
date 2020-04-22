const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        default: "Investigator"
    },
    player:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
    
})

const User = mongoose.model("users", UserSchema);
module.exports = User;

//const UserSchema = new Schema({
//   handle: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = User = mongoose.model("users", UserSchema);
