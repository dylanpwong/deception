const express = require("express");
const mongoose = require('mongoose');
const User = require('./models/User')
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
//useUnifiedTopology: true
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

// app.use(bodyParser.urlencoded({
//     extended: false
// }))

// app.use(bodyParser.json());



const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`) });