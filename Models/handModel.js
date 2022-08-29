const mongoose = require("mongoose");
const validator = require("validator");

// Status Schema
const handSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name "],
  },
  Description: {
    type: String,
    required: [true, "Please enter the description !! "],
    select: true,
    minlength: 2,
  },
  Exercices: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Exercice",
    },
  ],
});

const Hand = mongoose.model("Hand", handSchema);
module.exports = Hand;
