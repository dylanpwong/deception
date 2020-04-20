const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
////////
const User = require('./models/User')
const users = require('./routes/api/users');
//useUnifiedTopology: true
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

// app.get('/',(req,res)=>{
//     const user = new User({
//        username: "player1",
//        role: "Investogator", 
//     })
//     user.save()
//     res.send("User saved!")
// })

app.use("/api/users",users)


const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`) });