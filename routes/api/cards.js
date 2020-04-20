const express = require("express");
const router = express.Router();
const Card = require("../../models/Card");

router.get('/index',(req,res)=>{
    Card.find({}).then((cards)=>res.json(cards))
})





module.exports = router;