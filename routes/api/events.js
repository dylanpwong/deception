const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");

router.get("/show", (req, res) => {
  Event.find({}).then((event) => res.json(event));
});

module.exports = router;
