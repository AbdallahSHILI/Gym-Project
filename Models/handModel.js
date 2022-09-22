const mongoose = require("mongoose");
const validator = require("validator");

// Status Schema
const handSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "please enter your Name "],
  },
  Description: {
    type: String,
    required: [true, "Please enter the description !! "],
    select: true,
    minlength: 2,
  },
  Exercises: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "exercise",
    },
  ],
});

const Hand = mongoose.model("Hand", handSchema);
module.exports = Hand;
